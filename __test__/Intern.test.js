const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern(123, 'Jason', 'Jason@email.com', 'school')
    expect(intern.name).toBe('Jason')
    expect(intern.id).toBe(123)
    expect(intern.email).toBe('Jason@email.com')
    expect(intern.school).toBe('school')
}); 