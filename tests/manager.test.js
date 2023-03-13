const { Employee, Manager, Engineer, Intern } = require("../lib/employee.js");

describe('Manager', () => {
    // A test is created to check that modulus does in fact return the the getName sent to the constructor Manager.
    describe('getName', () => {
      it('should return the name sent to the constructor', () => {
        const name = "AnyName";
        const manager = new Manager(name, 1235, "Randome.com");
        expect(manager.getName()).toEqual(name);
      });
    });
  });