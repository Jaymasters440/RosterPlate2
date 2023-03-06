// Create the employee category
function employee(name, id, email,) {
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
function Manager(name, id, email, officeNumber,) {
    employee.call(this, name, id, email,)
    this.officeNumber = officeNumber;
    //Figure out how to call Manager
    this.getRole = function () {
        return "Manager";
    };
}

// Use Employe category and allow Engineer to inherit employee properties and add github and GitHub username
function Engineer(name, id, email, getName, ) {
    employee.call(this, name, id, email, getName,)
    this.engineer = this.engineer;

    // Figure out how to call Engineer
    console.log
}
// Use Employe category and allow Intern to inherit employee properties and add school and getSchool
function Intern(name, id, email, getName, getId, getEmail, getRole) {
    employee.call(this, name, id, email, getName, getId, getEmail, getRole)
    this.intern = this.intern;

    // Figure out how to call Engineer
    console.log
}