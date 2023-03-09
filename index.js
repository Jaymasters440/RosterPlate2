const inquirer = require('inquirer');
const fs = require("fs");
const gm = require("./utils/generateHTML.js");

// generate Questions for each type of employee 
var managerQuestions = [{
    type: "input",
    message: "What is the manager's name?",
    name: "name"
},

{
    type: "input",
    message: "What is the manager's id?",
    name: "id"
},

{
    type: "input",
    message: "What is the manager's email?",
    name: "email"
},

{
    type: "input",
    message: "What is the manager's office?",
    name: "office",
},

]

var engineerQuestions = [{
    type: "input",
    message: "What is the Engineer's name?",
    name: "name"
},

{
    type: "input",
    message: "What is the Engineer's id?",
    name: "id"
},

{
    type: "input",
    message: "What is the Engineer's email?",
    name: "email"
},

{
    type: "input",
    message: "What is the Engineers'GitHub?",
    name: "office",
},

]

var managerQuestions = [{
    type: "input",
    message: "What is the Intern's name?",
    name: "name"
},

{
    type: "input",
    message: "What is the Intern's id?",
    name: "id"
},

{
    type: "input",
    message: "What is the Intern's email?",
    name: "email"
},

{
    type: "input",
    message: "What is the Intern's school?",
    name: "office",
},

]


// Function to write to HTML



// Function to initialize app //??
function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
        const filename = ``
        writeToFile(filename, data);
    });
 }