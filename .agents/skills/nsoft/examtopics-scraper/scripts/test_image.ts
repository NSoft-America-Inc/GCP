import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.examtopics.com/exams/google/professional-cloud-architect/view/', { waitUntil: 'domcontentloaded' });
    
    // get the images in .card-text
    const images = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.card-text img')).map((img: any) => img.src);
    });
    
    console.log(images);
    await browser.close();
})();
