// // Import inquirer
// const inquirer = require('inquirer');

//import employee superclass
const { default: inquirer } = require("inquirer");
const Employee = require("./Employee");

// create subclass of employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        // const mPrompt = (newEmployee) => {
        //     inquirer
        //         prompt([
        //             {
        //             type: "input",
        //             message: "What is their office number?",
        //             name: "officeNumber"
        //             }
        //         ])
        //         .then((answers) => {
                    
        //             addNewEmployee();
        //         })
        // }
    }
}

// getRole()

//Exports module (obviously XD)
module.exports = Manager;