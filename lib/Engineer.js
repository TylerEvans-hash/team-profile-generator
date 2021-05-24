const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name = '', id, email, role, officeNumber) {
        super(name);
        super(id);
        super(email);
        super(role);

        this.officeNumber = officeNumber;
    }
}

module.exports = Employee;