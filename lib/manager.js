// Import inquirer
const inquirer = require('inquirer');

//import employee superclass
const { default: inquirer } = require("inquirer");
const Employee = require("./employee");

// create subclass of employee
class Manager extends Employee {
    constructor(officeNumber) {
        const officeNumber = this.officeNumber;
        super(eName, id, email, role);
        const mPrompt = (newEmployee) => {
            inquirer
                prompt([
                    {
                    type: "input",
                    message: "What is their office number?",
                    name: "officeNumber"
                    }
                ])
                .then((answers) => {
                    
                    addNewEmployee();
                })
        }
    }
}

// getRole()

//Exports module (obviously XD)
module.exports = Manager;