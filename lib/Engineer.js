const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, GithubUser) {
        super(name,id,email)
        this.GithubUser = GithubUser;
    }

    getGithubUser() {
        return this.GithubUser
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;