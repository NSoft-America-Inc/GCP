import Tesseract from 'tesseract.js';

(async () => {
    const url = 'https://www.examtopics.com/assets/media/exam-media/04339/0007100001.png';
    console.log("Starting OCR on:", url);
    try {
        const { data: { text } } = await Tesseract.recognize(url, 'eng');
        console.log("Extract Text:\n", text);
    } catch (e) {
        console.error("Error:", e);
    }
})();
