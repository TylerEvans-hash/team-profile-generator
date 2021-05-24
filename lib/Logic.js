const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Logic() {
    this.employees = [];
};

Logic.prototype.promptUser = function () {
    console.log("\n-------------\n");
    console.log('Welcome to the Team Profile Generator application!');
    console.log('Please answer the following questions. Thank you!');
    console.log("\n-------------\n");

    this.addEmployee();
};

Logic.prototype.addEmployee = function (employees) {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        })
        .then(({ role }) => {
            if (role === 'Manager') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Manager's name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter the Manager's name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: "What is the Manager's ID number?",
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Please enter the Manager's ID number!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Manager's email?",
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Please enter the Manager's email addess!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'officeNumber',
                        message: "What is the Manager's office number?",
                        validate: officeNumberinput => {
                            if (officeNumberinput) {
                                return true;
                            } else {
                                console.log("Please enter the Manager's office Number!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ]).then(({ name, id, email, officeNumber, confirmAddEmployee }) => {
                    this.employees.push(new Manager(name, id, email, officeNumber));
                    console.log(this.employees);

                    if (confirmAddEmployee) {
                        return this.addEmployee(employees)
                    } else {
                        return employees
                    }
                });
            } else if (role === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Engineer's name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter the Engineer's name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: "What is the Engineer's ID number?",
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Please enter the Engineer's ID number!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Engineer's email?",
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Please enter the Engineer's email addess!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'gitHub',
                        message: "What is the Engineer's GitHub link?",
                        validate: gitHubInput => {
                            if (gitHubInput) {
                                return true;
                            } else {
                                console.log("Please enter the Engineer's GitHub Link!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ]).then(({ name, id, email, gitHub, confirmAddEmployee }) => {
                    this.employees.push(new Engineer(name, id, email, gitHub));
                    console.log(this.employees);

                    if (confirmAddEmployee) {
                        return this.addEmployee(employees)
                    } else {
                        return employees
                    }
                });
            } else if (role === 'Intern') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Intern's name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter the Intern's name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: "What is the Intern's ID number?",
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Please enter the Intern's ID number!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Intern's email?",
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Please enter the Intern's email addess!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Where did the Intern go to school?",
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log("Please enter the Intern's school name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ]).then(({ name, id, email, school, confirmAddEmployee }) => {
                    this.employees.push(new Intern(name, id, email, school));
                    console.log(this.employees);

                    if (confirmAddEmployee) {
                        return this.addEmployee(employees)
                    } else {
                        return employees
                    }
                });
            }
        })
};

module.exports = Logic;