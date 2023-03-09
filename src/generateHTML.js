function generateCard(employee){
    var T= employeeType(employee);
    var cardHTML=`<div class="card col-auto" style="width: 18rem; margin:20px;">
    <div class="card-header">
        <!-- Add name link later -->
        <h2>${employee.getName()}</h2>
        <!-- Add role later -->
        <h3>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <h5>${employee.getId()}</h5>
        <h5>${employee.getEmail()}</h5>
        <h5>${employee.getRole()}/office/GitHub/school</h5>

    </div>
</div>`
}
function employeeType(employee){
    if (employee.getRole()=== "Manager")
        return (getOffice)
}