const fs = require('fs');
const path = require('path');

const dir = '/Users/yg/workspace/Nsoft/GCP/certification/solution_architect/result/explanations';
const files = fs.readdirSync(dir).filter(f => f.startsWith('question_') && f.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Suggested Answer 삭제
    content = content.replace(/Suggested Answer:\s*[A-E]\s*🗳️/g, '');

    // 2. 질문 원문 가로 스크롤 방지 줄바꿈 처리
    // [질문 원문 전체] ```text ... ``` 블록 찾기
    const blockRegex = /(\*\*\[질문 원문 전체\]\*\*\s*\n\s*```text\s*\n)([\s\S]*?)(\s*\n\s*```)/g;
    content = content.replace(blockRegex, (match, prefix, text, suffix) => {
        // text에서 보기(A., B., C., D., E.)가 나오기 전까지의 질문 본문을 문장 단위로 분할
        let lines = text.split('\n');
        let questionPart = [];
        let optionPart = [];
        let isOption = false;

        for (let line of lines) {
            let trimmed = line.trim();
            if (/^[A-E]\./.test(trimmed)) {
                isOption = true;
            }
            if (isOption) {
                optionPart.push(line);
            } else {
                if (trimmed) questionPart.push(trimmed);
            }
        }

        // 질문 본문을 문장 단위로 쪼개서 줄바꿈
        // 마침표(.), 물음표(?) 뒤에 공백이 오면 문장이 끝난 것으로 판단
        let questionText = questionPart.join(' ');
        let splitQuestions = questionText.match(/[^.!?]+[.!?]+(\s+|$)/g) || [questionText];
        
        let formattedQuestion = splitQuestions
            .map(q => q.trim())
            .filter(q => q.length > 0)
            .join('\n');

        let resultText = formattedQuestion;
        if (optionPart.length > 0) {
            resultText += '\n\n' + optionPart.join('\n');
        }

        return prefix + resultText + suffix;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
