const Employee = require('../lib/Employee.js');

test('create employee object', () => {
    const employee = new Employee('Dave', 0, 'asdf@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('asdf@gmail.com');
    expect(employee.role).toBe('Employee')
});

test('gets employee name', () => {
    const employee = new Employee('Dave', 0, 'asdf@gmail.com');

    expect(employee.getName()).toEqual('Dave');
});

test('gets employee ID number', () => {
    const employee = new Employee('Dave', 0, 'asdf@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Dave', 0, 'asdf@gmail.com');

    expect(employee.getEmail()).toBe('asdf@gmail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Dave', 0, 'asdf@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});