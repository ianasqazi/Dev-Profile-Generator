const axios = require("axios");
const fs = require("fs");
const path = require("path");


// const convertHTMLToPDF = require("pdf-puppeteer");
const puppeteer = require('puppeteer');

const askQuestions = require("../Dev-Profile-Generator/askQuestions")
const generateHTML = require('../Dev-Profile-Generator/generateHTML');
// const convertPDF = require("../Dev-Profile-Generator/generateHTML.js")


async function callAPI(username,colorChosen){
        
    const queryUrl1 = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryUrl1);
    
    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    const res2 = await axios.get(queryUrl2);
       
    await generateHTML(username,colorChosen,res,res2);
      
    const createPDF = async (colorChosen,generateHTML) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const options = {
            path: `${username}_PDF.pdf`,
            format:'A4'
        };

        const contentHtml = await fs.readFileSync(path.resolve(__dirname, `${username}.html`)).toString('utf-8');
        await page. setContent(contentHtml);

        // await page.screenshot({ path: 'output.png' });
        await page.pdf(options);
        await page.close();
        await browser.close();
    }
    createPDF();

    };

module.exports = callAPI;

// module.exports = createPDF;
