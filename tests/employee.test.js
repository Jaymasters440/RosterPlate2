const { Employee, Manager, Engineer, Intern } = require("./lib/employee.js");

describe('Employee', () => {
    // A test is created to check that modulus does in fact return the the getName sent to the constructor employee.
    describe('getName', () => {
      it('should return the name sent to the constructor', () => {
        const name = "AnyName";
        const employee = new Employee(name, 1235, "Randome.com");
        expect(employee.getName()).toEqual(name);
      });
    });
  });