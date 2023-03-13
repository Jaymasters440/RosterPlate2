const { Employee, Manager, Engineer, Intern } = require("../lib/employee.js");

describe('Engineer', () => {
    // A test is created to check that modulus does in fact return the the getName sent to the constructor engineer.
    describe('getGitHub', () => {
      it('should return the gitHub user name sent to the constructor', () => {
        const gitHub = "userName";
        const engineer = new Engineer("Frankfurter", 1235, "Randome.com",gitHub);
        expect(engineer.getGitHub()).toEqual(gitHub);
      });
    });

    describe('getRole', () => {
      it('should return the gitRole name sent to the constructor', () => {
        
        const engineer = new Engineer("Frankfurter", 1235, "Randome.com","gitHub");
        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });

