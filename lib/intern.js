//import the super class
const Employee = require("./Employee")

// Create an manager subclass of employee
class Intern extends Employee { 
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
}

// getSchool()

// getRole()—overridden to return 'Intern'

//Exports module (obviously XD)
module.exports = Intern;