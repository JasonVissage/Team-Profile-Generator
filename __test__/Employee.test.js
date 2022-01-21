const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee(123, 'Jason', 'Jason@email.com')
    expect(employee.id).toBe(123)
    expect(employee.name).toBe('Jason')
    expect(employee.email).toBe('Jason@email.com')
}); 