const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Jason', 123, 'Jason@email.com')
    expect(employee.name).toBe('Jason')
    expect(employee.id).toBe(123)
    expect(employee.email).toBe('Jason@email.com')
}); 