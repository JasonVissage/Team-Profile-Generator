const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee("Jason", 123, "Jason@email.com")
    expect(typeof employee.name).toBe("string")
    expect(typeof employee.id).toBe("number")
    expect(typeof employee.email).toBe("string")
}); 