const { isTypedArray } = require("util/types");
const Manager = require("../lib/Manager");

describe('Manager Class', () => {
    // Arrange
    it('have a name property when a new Manager is initiated', () => {

        // Act
        const Jen = new Manager();

        // Assert
        expect("name" in Jen).toEqual(true);
    });

    // Arrange
    it('should store the "email" passed into it in the employee.email property', () => {

        // Act
        const Jen = new Manager("Jen", "45", "Jen@hotmail.com");

        // Assert
        expect(Jen.email).toBe("Jen@hotmail.com");
    });

    // Arrange
    it('should store the github username of the new Manager', () => {

        // Act
        const Jen = new Manager("Jen", "45", "Jen@hotmail.com", 103);

        // Assert
        expect(Jen.officeNumber).toBe(103);
    });
})