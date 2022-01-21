const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Jason', 123, 'Jason@email.com', 'JasonHub')
    expect(manager.name).toBe('Jason')
    expect(manager.id).toBe(123)
    expect(manager.email).toBe('Jason@email.com')
    expect(manager.githubuser).toBe('JasonHub')
}); 