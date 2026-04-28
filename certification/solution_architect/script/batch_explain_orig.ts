import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawDir = path.join(__dirname, '../result/ordered_raw_questions');
const explanationsDir = path.join(__dirname, '../result/explanations');
const skillFile = '/Users/yg/workspace/Nsoft/GCP/.agents/skills/nsoft/gcp-exam-explainer/SKILL.md';

if (!fs.existsSync(explanationsDir)) {
  fs.mkdirSync(explanationsDir, { recursive: true });
}

const skillContent = fs.readFileSync(skillFile, 'utf-8');
const files = fs.readdirSync(rawDir)
  .filter(f => f.startsWith('question_') && f.endsWith('.md'))
  .sort();

console.log(`Found ${files.length} raw questions.`);

for (const file of files) {
  const match = file.match(/question_(\d+)\.md/);
  if (!match) continue;
  
  const questionNum = match[1];
  const targetFile = path.join(explanationsDir, `question_${questionNum}.md`);
  const rawFile = path.join(rawDir, file);

  if (fs.existsSync(targetFile)) {
    console.log(`[${questionNum}] Skipping, already exists.`);
    continue;
  }

  console.log(`[${questionNum}] Processing...`);
  const questionContent = fs.readFileSync(rawFile, 'utf-8');

  const prompt = `You are an expert GCP Exam Explainer.
Your task is to generate a comprehensive explanation in Korean for the following GCP exam question.
You MUST follow the instructions and format rules specified below. 

# Format and Rules (SKILL.md):
${skillContent}

# Raw Exam Question:
${questionContent}

Important Instructions:
- Do NOT use any tools or external searches.
- Generate the output entirely in Korean (except for English questions and quotes).
- Follow the 4 sections of the template strictly.
- In Section 2, MUST output [질문 원문 전체] -> [문장별 끊어 읽기 및 해석] -> [핵심 어휘 및 구문] in this exact order.
- Extract AT LEAST 10 vocabulary words/phrases in [핵심 어휘 및 구문]. Do not be conservative.
- Provide VERY DETAILED and comprehensive wrong answer analysis (소거법) in Section 3.
- Elaborate step-by-step on how each concept is used in the question in Section 4.
- Return ONLY the final markdown content. Do NOT include any intro, outro, or conversational filler.
`;

  try {
    const stdout = execSync('gemini -m gemini-2.5-flash -p "" --approval-mode yolo', { 
      input: prompt, 
      encoding: 'utf-8', 
      maxBuffer: 1024 * 1024 * 50
    });
    
    let content = stdout.trim();

    if (content.startsWith('```markdown')) {
      content = content.replace(/^```markdown\n/, '').replace(/\n```$/, '');
    } else if (content.startsWith('```')) {
      content = content.replace(/^```\n/, '').replace(/\n```$/, '');
    }

    fs.writeFileSync(targetFile, content.trim(), 'utf-8');
    console.log(`[${questionNum}] Successfully generated.`);

  } catch (error) {
    console.error(`[${questionNum}] Error during generation for question ${questionNum}:`, error);
  }

  execSync('sleep 1');
}
