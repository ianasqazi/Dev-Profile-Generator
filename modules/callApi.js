const axios = require("axios"); // import axio npm library to call the api's from github
const fs = require("fs"); // import fs npm library to write file
const path = require("path"); // import path npm library to read relative paths
const puppeteer = require('puppeteer'); // import puppeteer npm library to convert html to pdf

const askQuestions = require("./askQuestions"); // import function from askQuestions.js file
const generateHTML = require("./generateHTML"); // import function from generateHTL.js file

// Function to call GitHub Api

async function callAPI(username,colorChosen){

        // First API call to get user Info
    const queryUrl1 = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryUrl1);
    
        // Second API call to get Starred Repositories Info
    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    const res2 = await axios.get(queryUrl2);
       
    // Function to generate HTML based on user info provided 
    await generateHTML(username,colorChosen,res,res2);
      
    // Function to create a PDF from the html created using PUPPETEER npm library
    const createPDF = async (colorChosen,generateHTML) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const options = {
            path: `${username}_PDF.pdf`,
            format:'A4'
        };

        const contentHtml = await fs.readFileSync(path.resolve(__dirname, `${username}.html`)).toString('utf-8');
        await page.setContent(contentHtml);
        await page.waitForSelector('main');

        await page.pdf(options);
        await page.screenshot({ path: 'screenshot.png', fullPage: true });

        await page.close();
        await browser.close();
    }

    //calling the function to create PDF
    createPDF();

    };

module.exports = callAPI;
