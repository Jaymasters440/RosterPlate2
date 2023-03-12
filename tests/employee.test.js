const { Employee, Manager, Engineer, Intern } = require("./lib/employee.js");

describe('Employee', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
    describe('getName', () => {
      it('should return the name sent to the constructor', () => {
        const name = "AnyName";
        const employee = new Employee(name, 1235, "Randome.com");
        expect(employee.getName()).toEqual(name);
      });
    });
  });