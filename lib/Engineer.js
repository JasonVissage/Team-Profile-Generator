const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, GithubUser) {
        super(name,id,email)
        this.GithubUser = GithubUser;
    }
}

module.exports = Engineer;