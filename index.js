const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require('inquirer');
const fs = require('fs');


const manQuestions = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Name of Manager:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Managers ID:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Managers email:'
    },
    {
        type: 'input',
        name: 'offNumber',
        message: 'Managers Office Number:'
    },
    {
        type: 'list',
        name: 'addTeammate',
        message: 'Want to add another team member?',
        choices: ['Manager', 'Engineer', 'Intern', 'No']
    }
])


}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Engineer:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineers ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineers email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Engineers GitHub:'
        },
        {
            type: 'list',
            name: 'addTeammate',
            message: 'Want to add another team member?',
            choices: ['Manager', 'Engineer', 'Intern', 'No']
        }
    ])
}


const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Intern:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Interns ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Interns email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Interns School:'
        },
        {
            type: 'list',
            name: 'addTeammate',
            message: 'Want to add another team member?',
            choices: ['Manager', 'Engineer', 'Intern', 'No']
        }
    ])
}