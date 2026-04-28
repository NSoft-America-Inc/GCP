import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
import Tesseract from 'tesseract.js';

(async () => {
    console.log("🚀 Starting Playwright Scraper...");
    // 브라우저가 화면에 표시되도록 headless: false로 설정 (로봇 인증(CAPTCHA) 통과용)
    const browser = await chromium.launch({ headless: false });
    // 기존 전역 컨텍스트와 로그인 로직 제거
    // 매 페이지마다 새로운 시크릿 컨텍스트를 생성하여 우회 시도
    
    // 6페이지부터 35페이지(약 346번 문제)까지 순회
    const startPage = 6;
    const maxPage = 35;
    
    for (let currentPage = startPage; currentPage <= maxPage; currentPage++) {
        console.log(`\n🕵️‍♂️ [Page ${currentPage}] 새로운 시크릿 창(Incognito)을 엽니다...`);
        const context = await browser.newContext();
        const page = await context.newPage();

        // ExamTopics URL 규칙: 1페이지는 /view/, 2페이지부터는 /view/2/ 형식
        const pagePath = currentPage === 1 ? '' : `${currentPage}/`;
        const url = `https://www.examtopics.com/exams/google/professional-cloud-architect/view/${pagePath}`;

        console.log(`📄 Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        
        console.log("⏳ 페이지 로드 대기 중... (만약 로봇 인증(CAPTCHA)이 뜨면 수동으로 체크해주세요!)");
        
        try {
            // 질문 카드가 로드될 때까지 최대 60초 대기
            await page.waitForSelector('.card.exam-question-card', { timeout: 60000 });
        } catch (e) {
            console.log("⚠️ 60초 내에 문제를 찾지 못했습니다.");
            console.log("    (로봇 인증을 늦게 풀었거나, PRO 결제 제한 페이지에 도달했을 수 있습니다.)");
            console.log("🏁 시크릿 창으로도 막혔다면 이는 IP 차단이거나, 유료 결제자 전용 구간일 확률이 높습니다.");
            await context.close();
            break;
        }

        console.log(`✅ [Page ${currentPage}] 문제 로드 완료! 추출을 시작합니다...`);
        
        const questionsData = await page.evaluate(() => {
            let results = [];
            document.querySelectorAll('.card.exam-question-card').forEach((card) => {
                let qTextElement = card.querySelector('.card-text');
                let questionContent = qTextElement ? qTextElement.innerText.trim() : "문제 내용 없음";
                questionContent = questionContent.replace(/Reveal Solution/g, '').trim();

                let images = Array.from(card.querySelectorAll('.card-text img')).map((img: any) => img.src);

                let choices = [];
                card.querySelectorAll('.multi-choice-item').forEach(choice => {
                    let letterElement = choice.querySelector('.multi-choice-letter');
                    let letter = letterElement ? letterElement.innerText.trim() : "";
                    let text = choice.innerText.trim();
                    if(letter) {
                        text = text.substring(letter.length).trim();
                    }
                    choices.push({ letter, text });
                });
                
                let correctAnswerBox = card.querySelector('.correct-answer');
                let correctAnswer = correctAnswerBox ? correctAnswerBox.innerText.trim() : "Unknown";
                
                results.push({ questionContent, images, choices, correctAnswer });
            });
            return results;
        });

        // 파일명 생성: questions_1-10.md 형식 (이 페이지의 시작 문제 번호 계산)
        const startQ = (currentPage - 1) * 10 + 1;
        const endQ = currentPage * 10;
        const fileName = `questions_${startQ}-${endQ}.md`;
        
        let md = "";
        let globalQNumber = startQ;

        for (let i = 0; i < questionsData.length; i++) {
            const q = questionsData[i];
            md += `### Question ${globalQNumber}\n\n${q.questionContent}\n\n`;

            if (q.images && q.images.length > 0) {
                for (const imgUrl of q.images) {
                    console.log(`🔍 [Question ${globalQNumber}] 이미지에서 코드(텍스트)를 추출 중...`);
                    try {
                        const { data: { text } } = await Tesseract.recognize(imgUrl, 'eng');
                        md += `**[이미지 추출 코드]**\n\`\`\`python\n${text.trim()}\n\`\`\`\n\n`;
                    } catch (e) {
                        console.error("이미지 OCR 실패:", imgUrl);
                        md += `![Image](${imgUrl})\n\n`;
                    }
                }
            }

            md += `#### Choices\n`;
            for (const choice of q.choices) {
                md += `- **${choice.letter}** ${choice.text}\n`;
            }

            md += `\n**정답:** ${q.correctAnswer}\n\n---\n\n`;
            globalQNumber++;
        }

        const header = `# Google Professional Cloud Architect Exam (Q${startQ} - Q${endQ})\n\n`;
        const resultDir = path.join(__dirname, '../result');
        if (!fs.existsSync(resultDir)) {
            fs.mkdirSync(resultDir, { recursive: true });
        }
        fs.writeFileSync(path.join(resultDir, fileName), header + md);
        console.log(`📝 ${fileName} 파일 저장 완료.`);
        
        // 추출이 끝나면 현재 시크릿 컨텍스트(창) 닫기 (쿠키/세션 초기화)
        await context.close();

        if (currentPage < maxPage) {
            // 봇 감지를 피하기 위해 3~6초 랜덤 딜레이
            const delay = Math.floor(Math.random() * 3000) + 3000;
            console.log(`⏳ 다음 시크릿 창을 열기 전 ${delay}ms 대기합니다...`);
            // 컨텍스트를 닫았으므로 page.waitForTimeout 대신 Promise로 대기
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.log("🎉 스크래핑 로직이 모두 종료되었습니다.");
    await browser.close();
})();
