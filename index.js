// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Add Markdown page to index.js
const generateReadMe = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Explain how you would install this project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage instructions .',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project.',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose your license for your project.',
        choices:['The MIT license', 'The GPL License', 'Apache License', 'Eclipse Public', 'Mozilla Public']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email for this project?',
      },
    ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated');
    });
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
