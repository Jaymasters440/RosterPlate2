const { Employee, Manager, Engineer, Intern } = require("./lib/employee.js");

describe('Employee', () => {
    // A test is created to check that modulus does in fact return the the getName sent to the constructor engineer.
    describe('getName', () => {
      it('should return the name sent to the constructor', () => {
        const name = "AnyName";
        const engineer = new Engineer(name, 1235, "Randome.com");
        expect(engineer.getName()).toEqual(name);
      });
    });
  });