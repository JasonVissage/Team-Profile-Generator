const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer(123, 'Jason', 'Jason@email.com', 'JasonHub')
    expect(engineer.name).toBe('Jason')
    expect(engineer.id).toBe(123)
    expect(engineer.email).toBe('Jason@email.com')
    expect(engineer.githubuser).toBe('JasonHub')
}); 