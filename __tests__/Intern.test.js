const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('asdf@gmail.com');
    expect(intern.role).toBe('Intern')
    expect(intern.school).toBe('U of A');
});

test('gets intern name', () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.getName()).toEqual('Dave');
});

test('gets intern ID number', () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.getEmail()).toBe('asdf@gmail.com');
});

test("gets intern's role", () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
    const intern = new Intern('Dave', 0, 'asdf@gmail.com', 'U of A');

    expect(intern.getSchool()).toBe('U of A');
});