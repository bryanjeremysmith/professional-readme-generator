// Including inquirer, generateMarkdown, and fs for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// An array of questions for user input
const questions=[
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage information for your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines for your project.',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'Please enter test instructions for your project.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please select the license for your project.',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
]

// This function writes to fileName
function writeToFile(fileName, data) {
    console.log("writing to file");
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if(err){
            return console.error(err);
        }
        console.log('The file was saved!')
    })
}

// This function initializes the app, asks the questions, gets the answers, and passes those answers to writeToFile
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./README.md', answers);
      })
      .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
          // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error)
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
