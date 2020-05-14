const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js')

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of the project:"
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of the project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Provide step by step installation instructions:"
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use:"
    },
    {
      type: "input",
      name: "license",
      message: "Enter the project's license information:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Add guidelines for contributing to the project:"
    },
    {
      type: "input",
      name: "tests",
      message: "Enter tests and testing instructions for the project:"
    },
    {
      type: "input",
      name: "username",
      message: "Enter your Github username:"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Github user email:"
    },
    {
      type: "list",
      name: "badge",
      message: "Select the language the project is written in:",
      choices: [
        "Java",
        "JavaScript",
        "HTML",
        "Python"
      ]
    }
  ]);
}

promptUser()
  .then(function(answers) {
    
    const markDown = generateMarkdown(answers);
    console.log(markDown);
    return fs.writeFileSync('readMe.md', markDown);
  })
  .then(function() {
    console.log("Successfully wrote to readMe.md");
  })
  .catch(function(err) {
    console.log(err);
  });
