import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
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

const CONCURRENCY = 1;

async function run() {
  const tasks: string[] = [];
  
  for (const file of files) {
    const match = file.match(/question_(\d+)\.md/);
    if (!match) continue;
    
    const questionNum = match[1];
    if (parseInt(questionNum) > 16) continue;
    const targetFile = path.join(explanationsDir, `question_${questionNum}.md`);
    
    if (fs.existsSync(targetFile)) {
      console.log(`[${questionNum}] Skipping, already exists.`);
      continue;
    }
    
    tasks.push(file);
  }

  console.log(`Remaining questions to process: ${tasks.length}`);

  let activeCount = 0;
  let index = 0;

  return new Promise<void>((resolve, reject) => {
    function next() {
      if (index >= tasks.length && activeCount === 0) {
        resolve();
        return;
      }

      while (activeCount < CONCURRENCY && index < tasks.length) {
        const file = tasks[index++];
        const match = file.match(/question_(\d+)\.md/);
        const questionNum = match![1];
        const targetFile = path.join(explanationsDir, `question_${questionNum}.md`);
        const rawFile = path.join(rawDir, file);

        console.log(`[${questionNum}] Processing...`);
        activeCount++;

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

CRITICAL: Do NOT say "I understand", "Here is the explanation", or anything conversational. Do NOT wrap the entire output in a code block unless specified by the content. Start IMMEDIATELY with the first section: "#### 🎯 1. 출제의도".
`;

        runGeminiWithRetry(prompt, questionNum, targetFile)
          .then(() => {
            activeCount--;
            next();
          })
          .catch((err) => {
            console.error(`[${questionNum}] Error after retries:`, err);
            activeCount--;
            next();
          });
      }
    }

    next();
  });
}

async function runGeminiWithRetry(prompt: string, questionNum: string, targetFile: string, retries = 3): Promise<void> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await runGemini(prompt, questionNum, targetFile);
      return;
    } catch (err) {
      console.error(`[${questionNum}] Attempt ${attempt} failed.`, err);
      if (attempt === retries) {
        throw err;
      }
      console.log(`[${questionNum}] Retrying in 5 seconds...`);
      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

function runGemini(prompt: string, questionNum: string, targetFile: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn('gemini', ['-m', 'gemini-2.5-flash', '-p', '', '--approval-mode', 'yolo', '-o', 'text'], {
      maxBuffer: 1024 * 1024 * 50
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data: any) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data: any) => {
      stderr += data.toString();
    });

    child.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Process exited with code ${code}. Stderr: ${stderr}`));
        return;
      }

      let content = stdout.trim();

      if (content.startsWith('```markdown')) {
        content = content.replace(/^```markdown\n/, '').replace(/\n```$/, '');
      } else if (content.startsWith('```')) {
        content = content.replace(/^```\n/, '').replace(/\n```$/, '');
      }

      fs.writeFileSync(targetFile, content.trim(), 'utf-8');
      console.log(`[${questionNum}] Successfully generated.`);
      resolve();
    });

    child.stdin.write(prompt);
    child.stdin.end();
  });
}

run().then(() => {
  console.log('All questions processed.');
}).catch((err) => {
  console.error('Run failed:', err);
});
