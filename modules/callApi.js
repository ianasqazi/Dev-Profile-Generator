const axios = require("axios");
const puppeteer = require('puppeteer');

const generateHTML = require("./generateHTML");

// Function to call GitHub API
async function callAPI(username, colorChosen) {

    // First API call to get user info
    const res = await axios.get(`https://api.github.com/users/${username}`);
    
    // Second API call to get starred repos
    const res2 = await axios.get(`https://api.github.com/users/${username}/starred`);
    
    // Generate HTML string
    const htmlContent = await generateHTML(username, colorChosen, res, res2);

    // Create PDF with Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);
    await page.waitForSelector('main');

    await page.pdf({ path: `${username}_PDF.pdf`, format: 'A4' });
    await page.screenshot({ path: `${username}_screenshot.png`, fullPage: true });

    await page.close();
    await browser.close();
}

module.exports = callAPI;
