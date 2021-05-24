const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('asdf@gmail.com');
    expect(engineer.role).toBe('Engineer')
    expect(engineer.gitHub).toBe('davesGitHub');
});

test('gets engineer name', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.getName()).toEqual('Dave');
});

test('gets engineer ID number', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.getEmail()).toBe('asdf@gmail.com');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Dave', 0, 'asdf@gmail.com', 'davesGitHub');

    expect(engineer.getGithub()).toBe('davesGitHub');
});