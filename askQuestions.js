
const inquirer = require("inquirer");
const callAPI1 = require('../Dev-Profile-Generator/callApi');

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

inquirer.prompt(questions)
    
    .then(function({username,colorChosen}) {
        callAPI1(username,colorChosen);
        });
    };    


module.exports = askQuestions;
