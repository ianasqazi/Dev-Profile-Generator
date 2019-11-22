const axios = require("axios");
// const fs = require("fs");

// const htmlToPdf = require('html-to-pdf');




const askQuestions = require("../Dev-Profile-Generator/askQuestions.js")
const generateHTML = require('../Dev-Profile-Generator/generateHTML.js');
const convertPDF = require("../Dev-Profile-Generator/generateHTML.js")

const createPdf = require("../Dev-Profile-Generator/convertPDF.js")


async function callAPI(username,colorChosen){
        
    const queryUrl1 = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryUrl1);
    
    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    const res2 = await axios.get(queryUrl2);
       
    await generateHTML(username,colorChosen,res,res2)
        
    };

    module.exports = callAPI;

