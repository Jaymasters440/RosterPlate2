// Create the employee category
function employee(name, id, email, getName, getId, getEmail, getRole) {
    this.name
    this.id
    this.email
    this.getName
    this.getId
    this.getEmail
    this.getRole
    this.role = employee () 
        console.log(Employee)

    };
            


// Use Employe category and allow Manager to inherit employee properties and add officeNumber 
function Manager(name, id, email, getName, getId, getEmail, getRole) {
    employee.call(this, name, id, email, getName, getId, getEmail, getRole)
    this.manager = this.manager;
//Figure out how to call Manager
    console.log
}

// Use Employe category and allow Engineer to inherit employee properties and add github and GitHub username
function Engineer(name, id, email, getName, getId, getEmail, getRole) {
    employee.call(this, name, id, email, getName, getId, getEmail, getRole)
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