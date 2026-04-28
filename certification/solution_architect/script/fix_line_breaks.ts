import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, '../result/explanations');
if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.startsWith('question_') && f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // **[한글 해석]**\n```text\n[내용]\n``` 패턴 찾기
  const regex = /\*\*\[한글 해석\]\*\*\s*\n```text\n([\s\S]*?)\n```/;
  const match = content.match(regex);

  if (match) {
    const originalText = match[1];
    // 문장 단위로 줄바꿈 적용 (마침표나 물음표 뒤에 공백이 오는 경우 줄바꿈 추가)
    const fixedText = originalText
      .replace(/([.!?])\s+/g, '$1\n')
      .trim();

    content = content.replace(originalText, fixedText);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed line breaks for ${file}`);
  } else {
    console.log(`No match for ${file}`);
  }
}
