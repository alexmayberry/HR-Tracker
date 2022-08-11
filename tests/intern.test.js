const { isTypedArray } = require("util/types");
const Intern = require("../lib/Intern");

describe('Intern Class', () => {
    // Arrange
    it('have a name property when a new Intern is initiated', () => {

        // Act
        const Jen = new Intern();

        // Assert
        expect("name" in Jen).toEqual(true);
    });

    // Arrange
    it('should store the "email" passed into it in the employee.email property', () => {

        // Act
        const Jen = new Intern("Jen", "45", "Jen@hotmail.com");

        // Assert
        expect(Jen.email).toBe("Jen@hotmail.com");
    });

    // Arrange
    it('should store the github username of the new Intern', () => {

        // Act
        const Jen = new Intern("Jen", "45", "Jen@hotmail.com", "Wazzu");

        // Assert
        expect(Jen.school).toBe("Wazzu");
    });
})