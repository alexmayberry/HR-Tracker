// Import inquirer
const inquirer = require('inquirer');

// Import employee
const Employee = require('./lib/employee');

// Import intern
const Intern = require('./lib/intern');

// Import manager
const Manager = require('./lib/manager');

// Import engineer
const Engineer = require('./lib/engineer');

// Create empty arraylist for employee roster
const employees = [];

// asks to add another employee or create index.html
const addNewEmployee = () => {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Do you want to add another employee?",
                name: "addNewEmployee"
            }
        ])
        .then((answer) => {
            answer.addNewEmployee
            ? employeePrompt()
            : renderHTML();
        });
}

// gets info for employee class and creates new employee 
const employeePrompt = () => {
    
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "eName"
            },
            {
                type: "input",
                message: "What is their ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            },
            {
                type: "list",
                message: "who is their role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then((answer) => {
            const { eName, id, email, role} = answer;
            const newEmployee = new Employee (eName, id, email, role);
            roleTest(newEmployee);
        });
}

// tests for type of employee and calls the correct next question.
const roleTest = (newEmployee) => {
    return newEmployee.role === "engineer" ? Engineer.ePrompt(newEmployee)
    : newEmployee.role === "intern" ? Intern.iPrompt(newEmployee)
    : newEmployee.role === "manager" ? Manager.mPrompt(newEmployee)
    : console.log("test");
}

const renderHTML = () => {
    console.log("HTML has been sooooo rendered")
}

//run script
addNewEmployee();