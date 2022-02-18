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
        choices:['The MIT license', 'The GPL License', 'Apache License']
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

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();






// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
