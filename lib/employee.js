// // Import inquirer
// const inquirer = require('inquirer');

// Create an employee class constructor functoin
class Employee { 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
      return this.name;
    }

    getId(){
      return this.id;
    }

    getEmail(){
      return this.email;
    }

    getRole(){
      return "Employee";
    }
}

module.exports = Employee;