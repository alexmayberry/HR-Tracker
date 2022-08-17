const { isTypedArray } = require("util/types");
const Engineer = require("../lib/Engineer");

describe('Engineer Class', () => {
    // Arrange
    it('have a name property when a new Engineer is initiated', () => {

        // Act
        const james = new Engineer();

        // Assert
        expect("name" in james).toEqual(true);
    });

    // Arrange
    it('should store the "email" passed into it in the employee.email property', () => {

        // Act
        const james = new Engineer("james", "45", "james@hotmail.com", "Engineer");

        // Assert
        expect(james.email).toBe("james@hotmail.com");
    });

    // Arrange
    it('should store the github username of the new Engineer', () => {

        // Act
        const james = new Engineer("james", "45", "james@hotmail.com", "coder6345");

        // Assert
        expect(james.github).toBe("coder6345");
    });
})