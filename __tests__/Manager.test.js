const Manager = require('../lib/Manager.js');

test('create manager object', () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('asdf@gmail.com');
    expect(manager.role).toBe('Manager');
});

test('gets manager name', () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com');

    expect(manager.getName()).toEqual('Dave');
});

test('gets manager ID number', () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com');

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com');

    expect(manager.getEmail()).toBe('asdf@gmail.com');
});

test("gets manager's role", () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com');

    expect(manager.getRole()).toBe('Manager');
});

test("gets manager's office number", () => {
    const manager = new Manager('Dave', 0, 'asdf@gmail.com', 1001);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});