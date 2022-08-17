// Import inquirer
const inquirer = require("inquirer");

// Import intern
const Intern = require("./lib/Intern");

// Import manager
const Manager = require("./lib/Manager");

// Import engineer
const Engineer = require("./lib/Engineer");

// Create empty arraylist for employee roster
const employees = [];

// asks to add another employee or create index.html
const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member do you want to add next?",
        name: "role",
        choices: ["Engineer", "Intern", "I don't want to add a new Employee"],
      },
    ])
    .then((answer) => {
      answer.role === "Engineer"
        ? engineerPrompt()
        : answer.role === "Intern"
        ? internPrompt()
        : renderHTML();
    });
};

const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ])
    .then((answer) => {
      const { name, id, email, officeNumber } = answer;
      const manager = new Manager(name, id, email, officeNumber)
      employees.push(manager);
      addNewEmployee();
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their github?",
        name: "github",
      }
    ])
    .then((answer) => {
      const { name, id, email, github } = answer;
      const engineer = new Engineer(name, id, email, github)
      employees.push(engineer);
      addNewEmployee();
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their school?",
        name: "school",
      }
    ])
    .then((answer) => {
      const { name, id, email, school } = answer;
      const intern = new Intern(name, id, email, school)
      employees.push(intern);
      addNewEmployee();
    });
};


const renderHTML = () => {
  console.log("HTML has been sooooo rendered");
};

//run script
managerPrompt();

