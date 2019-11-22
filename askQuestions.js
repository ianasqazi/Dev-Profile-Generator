
const inquirer = require("inquirer");
// const [callAPI1,callAPI2] = require('../Dev-Profile-Generator/callApi.js');
const callAPI1 = require('../Dev-Profile-Generator/callApi.js');



function askQuestions(){
    const questions = [
        {
            message: "Enter your GitHub username:",
            name: "username"
          },
        {
            type: 'list',
            message: "Choose any color",
            choices: ['green', 'blue', 'pink', 'red'],
            name:"colorChosen"
        }
    ];

inquirer
    
    .prompt(questions)
    
    .then(function({username,colorChosen}) {

        callAPI1(username,colorChosen);
        // callAPI2(username,colorChosen);
                    // console.log(githubResponse);

    
        });
    };    


module.exports = askQuestions;
