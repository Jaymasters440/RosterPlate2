const inquirer = require('inquirer');
const fs = require("fs");
const gm = require("./src/generateHTML.js");
const Employee = require("./lib/employee.js");
var employees = [];


// generate Questions for each type of employee 
var defaultQuestions = [{
    type: "input",
    message: "What is the employee's name?",
    name: "name"
},

{
    type: "input",
    message: "What is the employee's id?",
    name: "id"
},

{
    type: "input",
    message: "What is the employee's email?",
    name: "email"
},



];

var managerQuestions = [
    ...defaultQuestions,
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    },
];

var engineerQuestions = [
    ...defaultQuestions,
    {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "gitHub",
    },

];

var internQuestions = [
    ...defaultQuestions,

    {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
    },

];
var menueQuestion = [{
    type: "list",
    message: "Would you like to add an engineer or intern? (or exit to create HTML?)",
    name: "choice",
    choices: ["engineer", "intern", "exit",]
}];


// Function to write to HTML



// Function to initialize app //??
function init() {
    console.log("Welcome to Roster Plate!")
    inquirer
        .prompt(managerQuestions)

        .then((data) => {
            var manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager)


            inquirer
            .prompt(menueQuestion)
            .then((data) => {
                console.log(data);
    
            })
        });

   
}
init();


//writeToFile(filename, data);