//import employee superclass
const Employee = require("./Employee");

// create subclass of employee
class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getGithub(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

//Exports module (obviously XD)
module.exports = Manager;