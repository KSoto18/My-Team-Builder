//Imported Modules
const Employee = require('./main/lib/Employee');
const Manager = require('./main/lib/Manager');
const Engineer = require('./main/lib/Engineer');
const Intern = require('./main/lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, './main/dist');
const distPath = path.join(DIST_DIR, 'team.html');

const buildTeam = require('./main/src/page-template');
const teamMembers = [];


// This Function lets the user choose what type of employee to add
function startApp () {
  function createTeam () {
    //Prompts user to choose the type of employee the would like to add
    inquirer.prompt([
      {
        type: 'list',
        message: 'What is the role of the new employee you would like to add?',
        name: 'newEmployee',
        choices: ['Manager', 'Employee', 'Intern', 'Engineer', 'No More Additions']
      }
    ])
    .then(function(userInput){
      switch(userInput.newEmployee){
        case 'Manager':
          theManager();
        break;
        case 'Employee':
          theEmployee();
        break;
        case 'Intern':
          theIntern();
        break;
        case 'Engineer':
          theEngineer();
        break;
      
        default:
          htmlPage();
      }
    })
  }

// Functions for creating Manager, Emplyee, Intern, and Engineer - inquirer questions
// Pushes new Employees into teamMembers Array

function theEmployee() {
  inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the Employee?',
        name: 'name',
      },

      {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
      },

      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      }
    ])
    .then(answers => {
      const employee = new Employee(answers.name, answers.id, answers.email);
      teamMembers.push(employee);
      createTeam();
    });
};

function theManager() {
  inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the Manager?',
        name: 'name',
      },

      {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
      },

      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNum',
      },
    ])
    .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
      teamMembers.push(manager);
      createTeam();
    });
};

function theIntern() {
  inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name',
      },

      {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
      },

      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
      },
    ])
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      createTeam();
    });
};

function theEngineer() {
  inquirer.prompt([
      {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name',
      },

      {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
      },

      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'github',
      },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      createTeam();
    });
};

function htmlPage () {
  console.log('Success, checkout your new team!');
  fs.writeFile(distPath, buildTeam(teamMembers), "UTF-8", function(err, results){
    if (err) console.log('error', err)
  });
}

createTeam();

}

startApp();
