var inquirer = require('inquirer');
const axios = require('axios');

const questions = [  {
    type: "input",
    name: "username",
    message: "What is your Github username"
  },
  {
    type: "list",
    message: "What is your favorite color?",
    name: "color",
    choices: [
      "Green", 
      "Blue", 
      "Pink", 
      "Red"
    ]
  }
  
];

inquirer
  .prompt(questions)
  .then(answers => {
      console.log(answers.username);
        axios.get('https://api.github.com/users/' + answers.username)
  .then(function (response) {
    // handle success
    console.log(response);
  })

    // Use user feedback for... whatever!!
  });


function writeToFile(fileName, data) {
 
}

function init() {

}

init();
