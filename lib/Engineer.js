const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, githubuser) {
        super(name,id,email)
        this.githubuser = githubuser;
    }

    getGithubUser() {
        return this.githubuser
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;