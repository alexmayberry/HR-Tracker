// Import inquirer
const inquirer = require("inquirer");

// Import employee
const Employee = require("./lib/Employee");

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
      console.log("addNewEmployee has run, ", answer.role);
      answer.role === "Engineer"
        ? engineerPrompt()
        : answer.role === "Intern"
        ? internPrompt()
        : renderHTML();
    });
};

const managerPrompt = () => {
  console.log("Ur a manager!");
  // const newManager = new Manager();
  // employeePrompt(newManager);
  employeePrompt()
  .then(inquirer
    .prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ]))
    .then((answer) => {
      console.log(answer);
      // newManager.officeNumber = answer.officeNumber;
      // addEmployeeObj(newManager);
      addNewEmployee();
    });
};

const engineerPrompt = () => {
  console.log("Ur an Engineer!");
  // employeePrompt();
  addNewEmployee();
};

const internPrompt = () => {
  console.log("Ur an Intern!");
  // employeePrompt();
  // inquirer
  //   .prompt([
  //     {
  //       type: "input",
  //       message: "What school do they go to?",
  //       name: "school",
  //     },
  //   ]).then((answer) => {
  //     console.log(answer);
  //   });
  addNewEmployee();
};

// gets info for employee class and creates new employee
const employeePrompt = (employeeObj) => {
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
    ])
    .then((answer) => {
      const { name, id, email, role } = answer;
      employeeObj.name = name;
      console.log(employeeObj.name);
    });
};

const addEmployeeObj = (employeeObj) => {
  employees.push(employeeObj);
};

const renderHTML = () => {
  console.log("HTML has been sooooo rendered");
};

//run script
managerPrompt();

// module.exports = [
//   renderHTML,
//   managerPrompt,
//   employeePrompt,
//   engineerPrompt,
//   internPrompt,
//   addNewEmployee,
// ];
