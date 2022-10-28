const generateTeam = team => {

    // Creates HTML card for Managers
    const generateManager = manager => {
        return `
        <div class="card m-3">
        <div class="card-header bg-info text-white">
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li><b>ID: </b>${manager.getId()}</li>
                <li><b>Email: </b><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li><b>Office Number: </b>${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
      `;
    };

    // Creates HTML card for Employees
    const generateEmployee = employee => {
        return `
        <div class="card m-3">
        <div class="card-header bg-info text-white">
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li><b>ID: </b>${employee.getId()}</li>
                <li><b>Email: </b><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            </ul>
        </div>
    </div>
      `;
    };

    // Creates HTML card for Engineers
    const generateEngineer = engineer => {
        return `
        <div class="card m-3">
        <div class="card-header bg-dark text-white">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li><b>ID: </b>${engineer.getId()}</li>
                <li><b>Email: </b><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li><b>GitHub: </b><a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
      `;
    };

    // Creates HTML card for Interns
    const generateIntern = intern => {
        return `
        <div class="card m-3">
        <div class="card-header bg-success text-white">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul>
                <li><b>ID: </b> ${intern.getId()}</li>
                <li><b>Email: </b><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li><b>School: </b> ${intern.getSchool()}</li>
            </ul>
        </div>
     </div>
      `;
    };

    // Team array to generate pieces of html based on the employee role
    const htmlPage = [];
    htmlPage.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Employee")
        .map(employee => generateEmployee(employee))
        .join("")
    );

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return htmlPage.join("");
}

module.exports = team => {
    // HTML BODY
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../assets/style.css">
        <title>My Team Builder</title>
    </head>
    <body class="bg-secondary">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3">
                    <h1 class="text-center title">TEAM</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
}