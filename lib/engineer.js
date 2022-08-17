//import the super class
const Employee = require("./Employee")

// Create an manager subclass of employee
class Engineer extends Employee { 
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.color = 'primary';
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;