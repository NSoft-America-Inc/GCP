---
name: examtopics-scraper
description: "ExamTopics 시험 문제를 Playwright와 Tesseract(OCR)를 사용하여 페이지 단위로 자동 스크래핑하고 마크다운으로 추출하는 스킬"
---

# ExamTopics Scraper 스킬

이 스킬은 ExamTopics의 자격증 시험 문제들을 자동으로 스크래핑하여 페이지별(10문항씩) 마크다운(`.md`) 파일로 추출합니다.
자동 로그인을 지원하며, 문제 안에 포함된 이미지는 OCR(광학 문자 인식, Tesseract.js)을 통해 파이썬 등 코드 블록으로 변환하여 저장합니다.

## 포함된 기능
- **자동 로그인**: 하드코딩된 자격 증명을 이용해 ExamTopics에 자동 로그인 (봇 체크 우회 도움)
- **페이지 순회 및 추출**: 지정된 시작 페이지부터 끝 페이지까지 돌며 `.card.exam-question-card` 내부의 텍스트와 정답을 파싱
- **이미지 자동 OCR 변환**: `<img>` 태그 발견 시 해당 이미지를 로컬 OCR로 판독하여 마크다운 내 코드 형태로 삽입

## 사용 방법

에이전트에게 다음과 같이 요청하여 실행할 수 있습니다:
- "ExamTopics 스크래퍼 실행해줘. 1페이지부터 끝까지 다 추출해줘"
- "examtopics-scraper 스킬로 4페이지부터 다시 실행해줘"

## 내부 디렉토리 구조
- `scripts/scraper.ts`: 메인 스크래퍼 스크립트 (Bun & Playwright 환경)
- `scripts/questions_*.md`: 추출된 결과물 마크다운 파일들

## 실행 컨텍스트 (에이전트용 가이드)
이 스킬을 실행하기 위해서는 아래의 명령어를 사용합니다:
```bash
cd /Users/yg/workspace/Nsoft/GCP/.agents/skills/nsoft/examtopics-scraper/scripts
~/.bun/bin/bun run scraper.ts
```
만약 스크립트를 재시작해야 하거나 범위를 변경해야 한다면 `scripts/scraper.ts` 내부의 `startPage`와 `maxPage` 변수를 먼저 수정한 뒤에 실행하세요.
