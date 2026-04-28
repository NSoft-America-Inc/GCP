import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const url = 'https://www.itexams.com/exam/Professional-Cloud-Architect/6'; // Try page 6 directly to see if it's free
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    const questionsData = await page.evaluate(() => {
        let results: any[] = [];
        document.querySelectorAll('.examsPage__question').forEach((card) => {
            let qBody = card.querySelector('.examsPage__question-body');
            // Remove answers block from body text if it's nested
            let bodyClone = qBody ? (qBody.cloneNode(true) as HTMLElement) : null;
            if (bodyClone) {
                const answersBlock = bodyClone.querySelector('.examsPage__question-answers');
                if (answersBlock) answersBlock.remove();
                const correctBlock = bodyClone.querySelector('.examsPage__question-correct-answer');
                if (correctBlock) correctBlock.remove();
            }
            let questionContent = bodyClone ? bodyClone.innerText.trim() : "문제 내용 없음";

            let images = Array.from(card.querySelectorAll('img')).map((img: any) => img.src);

            let choices: { letter: string, text: string }[] = [];
            card.querySelectorAll('.examsPage__question-answer').forEach(choice => {
                let text = choice.textContent?.trim() || "";
                let letterMatch = text.match(/^([A-Z])\.\s*(.*)/);
                if (letterMatch) {
                    choices.push({ letter: letterMatch[1], text: letterMatch[2] });
                } else {
                    choices.push({ letter: "-", text: text });
                }
            });
            
            let correctAnswerBox = card.querySelector('.examsPage__question-correct-answer');
            let correctAnswer = correctAnswerBox ? correctAnswerBox.textContent?.trim() : "Unknown";
            
            results.push({ questionContent, images, choices, correctAnswer });
        });
        return results;
    });

    console.log(JSON.stringify(questionsData, null, 2));

    await browser.close();
})();
