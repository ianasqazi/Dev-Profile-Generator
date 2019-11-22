const axios = require("axios");

const askQuestions = require("../Dev-Profile-Generator/askQuestions.js")
const generateHTML = require('../Dev-Profile-Generator/generateHTML.js');



function callAPI1(username,colorChosen){
        
    const queryUrl1 = `https://api.github.com/users/${username}`;
    axios.get(queryUrl1).then(function(res) {
    
        let githubResponse = {
              avatar: res.data.avatar_url,
              name: res.data.name,
              company: res.data.company,
              location: res.data.location,
              html_url: res.data.html_url,
              blog: res.data.blog,
              bio: res.data.bio,
              public_repos: res.data.public_repos,
              followers: res.data.followers,
              following: res.data.following
            };
            return githubResponse;
            // console.log(githubResponse);
    
        });
        
    
    };

function callAPI2(username,colorChosen){

    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    axios.get(queryUrl2).then(function(res) {
        var starredCount = res.data.length;
        // console.log(starredCount);
        });

        generateHTML(username,colorChosen);

    }

module.exports = [callAPI1,callAPI2];
// module.exports = callAPI2;



