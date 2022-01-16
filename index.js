const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    },
]

function addIntern() {
    inquirer.prompt(questions)
}


function addEngineer() {
    inquirer.prompt(questions)
}


function addManager() {
    inquirer.prompt(questions)
}

