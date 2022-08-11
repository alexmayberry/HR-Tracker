const { isTypedArray } = require("util/types");
const Employee = require("../lib/Employee");

describe('employeeClass', () => {
    // Arrange
    it('have a name property when a new Employee is initiated', () => {

        // Act
        const james = new Employee();

        // Assert
        expect("name" in james).toEqual(true);
    });

    // Arrange
    it('should store the "email" passed into it in the employee.email property', () => {

        // Act
        const james = new Employee("james", "45", "james@hotmail.com", "jester");

        // Assert
        expect(james.email).toBe("james@hotmail.com");
    });
})