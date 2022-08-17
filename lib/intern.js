//import the super class
const Employee = require("./Employee")

// Create an manager subclass of employee
class Intern extends Employee { 
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.color = 'secondary';
    }

    getGithub(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;