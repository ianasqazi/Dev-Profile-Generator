const puppeteer = require('puppeteer');
const generateHTML = require('../Dev-Profile-Generator/generateHTML');


const createPdf = async (generateHTML) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: './Profile.pdf',
    format:'A4'
};
  // Awaits content from the generatePdfContent
  await page.setContent(generatePdfContent(answers.color, gitHubInfo ));
//   await page.screenshot({ path: 'screenshot/output.png' });
  await page.pdf(options);
  await browser.close();
}

module.exports.createPdf = createPdf;