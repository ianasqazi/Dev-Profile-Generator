const axios = require("axios");

const askQuestions = require("../Dev-Profile-Generator/askQuestions.js")
const generateHTML = require('../Dev-Profile-Generator/generateHTML.js');



async function callAPI1(username,colorChosen){
        
    const queryUrl1 = `https://api.github.com/users/${username}`;
    const res = await axios.get(queryUrl1);
    

    // .then(res => {
    //     const githubResponse = {
    //               avatar: res.data.avatar_url,
    //               name: res.data.name,
    //               company: res.data.company,
    //               location: res.data.location,
    //               html_url: res.data.html_url,
    //               blog: res.data.blog,
    //               bio: res.data.bio,
    //               public_repos: res.data.public_repos,
    //               followers: res.data.followers,
    //               following: res.data.following
    //             };

        // console.log(githubResponse);
    //   })    
       
        await generateHTML(username,colorChosen,res);
        
    };

    // const axios = require("axios");

// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const getData = async url => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);

    

// async function callAPI2(username,colorChosen){

//     const queryUrl2 = `https://api.github.com/users/${username}/starred`;
//     await axios.get(queryUrl2).then(function(res) {
//         var starredCount = res.data.length;
        
//         // console.log(starredCount);
//         });

//         generateHTML(username,colorChosen);

//     }

// module.exports = [callAPI1,callAPI2];
module.exports = callAPI1;



