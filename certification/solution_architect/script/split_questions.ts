import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, '../result/gcp_pca_333_questions_nocache.md');
const outputDir = path.join(__dirname, '../result/raw_questions');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read the full markdown file
const content = fs.readFileSync(inputFile, 'utf-8');

// Split the content by the horizontal rule delimiter
const chunks = content.split('----------------------------------------');

let count = 0;

for (const chunk of chunks) {
  const trimmedChunk = chunk.trim();
  if (!trimmedChunk) continue;

  // Extract the question number to name the file properly
  const match = trimmedChunk.match(/Question #:\s*(\d+)/);
  if (match) {
    const questionNum = parseInt(match[1], 10);
    // Format question number with leading zeros (e.g., 001)
    const paddedNum = questionNum.toString().padStart(3, '0');
    const fileName = `question_${paddedNum}.md`;
    const filePath = path.join(outputDir, fileName);
    
    fs.writeFileSync(filePath, trimmedChunk, 'utf-8');
    count++;
  } else if (trimmedChunk.includes('Exam Topics Questions') && trimmedChunk.includes('@thatonecodes')) {
    // This is the header of the file, skip it
    continue;
  }
}

console.log(`Successfully split into ${count} individual question files in 'result/raw_questions/'.`);
