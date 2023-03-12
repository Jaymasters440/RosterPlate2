function generateCard(employee){
    
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
        <h5>${employeeType(employee)}</h5>

    </div>
</div>`
return cardHTML;
}

function generateHTML(employees){
    var cards ="";
    for(let i = 0; i<employees.length; i++){
        cards += generateCard(employees[i])
    }

    var results = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster Plate</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    
    <body>
        <header>
            <div>
                <h1>My Team</h1>
            </div>
        </header>
        <div class="containter text-center" style="margin:30px;">
            <div class="row">
                ${cards}
            </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`

    return results;
}
function employeeType(employee){
    if (employee.getRole()=== "Manager"){
        return (employee.getOfficeNumber ());
        
    }else if (employee.getRole()=== "Engineer"){
        return ("<a href = 'gitHub.com/" + employee.getGitHub() + "'>" + employee.getGitHub() + "</a>");

    }else {
        return (employee.getSchool());
    };
}

module.exports = {generateHTML}