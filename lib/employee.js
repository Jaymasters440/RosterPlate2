// Create the Employee categories with this.getRole etc.
function Employee(name, id, email,) {
    
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function () {
        return this.name;
    };
    this.getId = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getRole = function () {
        return "Employee";
    };
   

};



// Use Employe category and allow Manager to inherit employee properties and add officeNumber 
function Manager (name, id, email, officeNumber,) {
    Employee.call(this, name, id, email,)
    this.officeNumber = officeNumber;
    //Figure out how to call Manager
    this.getRole = function () {
        return "Manager";
    };
    this.getOfficeNumber = function() {
        return this.officeNumber
    }
}

// Use Employe category and allow Engineer to inherit employee properties and add github and GitHub username
function Engineer(name, id, email, gitHub, ) {
    Employee.call(this, name, id, email, )
    this.gitHub = gitHub ;
    this.getGitHub = function () {
        return this.gitHub
    }

    this.getRole = function () {
        return "Engineer";
    };
}
// Use Employe category and allow Intern to inherit employee properties and add school and getSchool
function Intern(name, id, email, school,) {
    Employee.call(this, name, id, email,)
    this.school = school ;
    

    this.getRole = function () {
        return "Intern";
    };

    this.getSchool = function() {
        return this.school
    }
    
}

module.exports = {Employee, Manager, Engineer, Intern};