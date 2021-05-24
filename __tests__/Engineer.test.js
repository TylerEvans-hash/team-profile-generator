const Engineer = require('../lib/Engineer');

test('create employee object', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'Engineer');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('asdf@gmail.com');
    expect(engineer.role).toBe('Engineer')
});

test('gets engineer name', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'Engineer');

    expect(engineer.getName()).toEqual('Dave');
});

test('gets engineer ID number', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'Engineer');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'Engineer');

    expect(engineer.getEmail()).toBe('asdf@gmail.com');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});