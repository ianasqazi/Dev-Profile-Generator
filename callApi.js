const axios = require("axios");
// const fs = require("fs");

var htmlToPdf = require('html-to-pdf');





const askQuestions = require("../Dev-Profile-Generator/askQuestions.js")
const generateHTML = require('../Dev-Profile-Generator/generateHTML.js');
const convertPDF = require("../Dev-Profile-Generator/generateHTML.js")


async function callAPI(username,colorChosen){
        
    const queryUrl1 = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryUrl1);
    
    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    const res2 = await axios.get(queryUrl2);
       
    await generateHTML(username,colorChosen,res,res2)
        
    htmlToPdf.convertHTMLFile(`${username}.html`, `${username}.pdf`,
    function (error, success) {
       if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    }
);

    };

    module.exports = callAPI;

