
const inquirer = require("inquirer"); // import inquirer npm library for command prompt 
const callAPI1 = require('./callApi'); // import function from callApi.js file

// questions to ask user
function askQuestions(){
    const questions = [
        {
            message: "Enter your GitHub username:",
            name: "username"
          },
        {
            type: 'list',
            message: "Choose any color",
            choices: ['grey','green', 'blue', 'pink', 'red','multicolor'],
            name:"colorChosen"
        }
    ];

// Prompt questions to user
// call GitHub Api's get information based on users input

inquirer.prompt(questions)
    
    .then(function({username,colorChosen}) {
        callAPI1(username,colorChosen);
        });
    };    


module.exports = askQuestions;
