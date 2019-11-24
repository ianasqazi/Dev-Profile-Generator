const askQuestions = require("./askQuestions") // import function from askQuestions.js file

// Initialize function to start the application 
// calling askQuestions function from askQuestions.js file

function init(){
    askQuestions();
}

init();

module.exports = init;