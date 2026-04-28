const fs = require('fs');
const path = require('path');

const nocachePath = '/Users/yg/workspace/Nsoft/GCP/certification/solution_architect/result/gcp_pca_333_questions_nocache.md';
const explanationsDir = '/Users/yg/workspace/Nsoft/GCP/certification/solution_architect/result/explanations';

if (!fs.existsSync(nocachePath)) {
    console.error('nocache.md not found');
    process.exit(1);
}

const nocacheContent = fs.readFileSync(nocachePath, 'utf8');

// nocache에서 문제별 데이터 추출
const questionsMap = {};
const qBlocks = nocacheContent.split('----------------------------------------');

qBlocks.forEach(block => {
    const qNumMatch = block.match(/Question #:\s*(\d+)/);
    if (!qNumMatch) return;
    
    const qNum = parseInt(qNumMatch[1], 10);
    
    // Question #: \d+ \n Topic #: \d+ \n [All ...] \n\n 이후부터 보기 전까지가 질문
    const lines = block.split('\n');
    let questionLines = [];
    let optionLines = [];
    let state = 'INIT'; // INIT, QUESTION, OPTIONS
    
    for (let line of lines) {
        let trimmed = line.trim();
        if (trimmed.startsWith('[All Professional Cloud Architect Questions]')) {
            state = 'QUESTION';
            continue;
        }
        
        if (state === 'QUESTION') {
            if (/^[A-F]\./.test(trimmed) || trimmed.startsWith('Suggested Answer:')) {
                state = 'OPTIONS';
            } else if (trimmed) {
                questionLines.push(trimmed);
            }
        }
        
        if (state === 'OPTIONS') {
            if (/^[A-F]\./.test(trimmed)) {
                optionLines.push(trimmed);
            }
        }
    }
    
    let questionText = questionLines.join(' ');
    // 문장 단위 분리 (마침표나 물음표 뒤에 공백이 있거나 대문자가 오는 경우 개행)
    let formattedQuestion = questionText.replace(/(?<=[\.\?])\s*(?=[A-Z])/g, '\n');
    
    questionsMap[qNum] = {
        question: formattedQuestion,
        options: optionLines
    };
});

// explanations 폴더의 파일들 수정
const files = fs.readdirSync(explanationsDir).filter(f => f.startsWith('question_') && f.endsWith('.md'));

files.forEach(file => {
    const qNumMatch = file.match(/question_(\d+)/);
    if (!qNumMatch) return;
    const qNum = parseInt(qNumMatch[1], 10);
    
    const filePath = path.join(explanationsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Suggested Answer 삭제 (전체 영역)
    content = content.replace(/Suggested Answer:\s*[A-F]\s*🗳️/g, '');
    
    // 질문 원문 전체 교체
    if (questionsMap[qNum]) {
        const { question, options } = questionsMap[qNum];
        const blockRegex = /(\*\*\[질문 원문 전체\]\*\*\s*\n\s*```text\s*\n)([\s\S]*?)(\s*\n\s*```)/g;
        
        let newBlockText = question + '\n\n' + options.join('\n\n');
        
        content = content.replace(blockRegex, (match, prefix, text, suffix) => {
            return prefix + newBlockText + '\n' + suffix;
        });
    }

    // 한글 해석 뒤에 공백 줄 제거용 정리
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Perfectly updated ${file}`);
});
