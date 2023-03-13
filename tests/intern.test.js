const { Employee, Manager, Engineer, Intern } = require("../lib/employee.js");

describe('Intern', () => {
    // A test is created to check that modulus does in fact return the the getName sent to the constructor Intern.  describe('getName', () => {
      it('should return the name sent to the constructor', () => {
        const name = "AnyName";
        const intern = new Intern(name, 1235, "Randome.com");
        expect(intern.getName()).toEqual(name);
      });
    });
