const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const generateHTML = require('./generateHTML.js');

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

inquirer.prompt(questions).then(async function({username,colorChosen}) {
 
    const queryUrl1 = `https://api.github.com/users/${username}`;
    axios.get(queryUrl1).then(function(res) {

        var githubResponse = {
          avatar: res.data.avatar_url,
          name: res.data.name,
          company: res.data.company,
          location: res.data.location,
          html_url: res.data.html_url,
          blog: res.data.blog,
          bio: res.data.bio,
          public_repos: res.data.public_repos,
          starred_url: res.data.starred_url,
          followers: res.data.followers,
          following: res.data.following
        };


    const queryUrl2 = `https://api.github.com/users/${username}/starred`;
    axios.get(queryUrl2).then(function(res) {
        var githubResponse2 = res.data.length;

        });



    });

    await generateHTML(colorChosen);

});

// module.exports.questions = questions;