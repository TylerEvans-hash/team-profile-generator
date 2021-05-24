const generateCards = employeeData => {
    const management = employeeData.filter(employee => {
        if (employee.role === 'Manager') {
            return true;
        } else {
            return false;
        }
    })
}

module.exports = employeeData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
        </head>
        <body>
            <header>
                <div>
                    <h1 class="page-title">Team profile's</h1>
                </div>
            </header>

            <main class="container">
                ${generateCards(employeeData)}
            </main>

        </body>
        </html>
    `
}

// Update Header title located in h1 with user inputed company name