const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Jason', 123, 'Jason@email.com', 'offNumber')
    expect(manager.name).toBe('Jason')
    expect(manager.id).toBe(123)
    expect(manager.email).toBe('Jason@email.com')
    expect(manager.offNumber).toBe('offNumber')
}); 