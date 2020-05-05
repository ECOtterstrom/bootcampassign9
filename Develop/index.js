const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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
      type: "checkbox",
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

function generateHTML(answers) {
  return `
<!DOCTYPE html>
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
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
