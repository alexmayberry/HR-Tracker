//import the super class
const Employee = require("./Employee")

// Create an manager subclass of employee
class Engineer extends Employee { 
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.role = "Engineer";
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubUsername = githubUsername;
    }
}


// getGithub()

// getRole()

//Exports module (obviously XD)
module.exports = Engineer;