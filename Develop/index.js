const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const badges = ['![License Badge](https://img.shields.io/badge/license-GNU%20GPLv3-green)', '![License Badge](https://img.shields.io/badge/license-Apache%20License%202.0-green)', '![License Badge](https://img.shields.io/badge/license-MIT-green)', '![License Badge](https://img.shields.io/badge/license-ISC-green)'];

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter a title for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter a description for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter the installation instructions for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter the usage information for this project!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for this project?',
    choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT', 'ISC']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter guidelines for contributing to this project',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter contribution guidelines for this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions for this project',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter instructions for testing this project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username?',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email address for this project?',
    validate: input => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    }
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => { if (err) throw err; console.log('readme.md created successfully!') });
}

// function to initialize program
function init() {
  return inquirer.prompt(questions)
    .then(answers => {
      if (answers.license === 'GNU GPLv3') {
        answers.badge = badges[0];
      } else if (answers.license === 'Apache License 2.0') {
        answers.badge = badges[1];
      } else if (answers.license === 'MIT') {
        answers.badge = badges[2];
      } else if (answers.license === 'ISC') {
        answers.badge = badges[3]
      }
      writeToFile('./readme.md', answers)
    });
}

// function call to initialize program
init();
