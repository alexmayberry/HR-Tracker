const generateHTML = (employees) => {

    let cards = '';
    for (let i = 0; i < employees.length; i++) {
        let fourthDetail = '';
        if (employees[i].officeNumber !== undefined) {
            fourthDetail = employees[i].officeNumber;
        } else if (employees[i].github !== undefined) {
            fourthDetail = employees[i].github;
        } else if (employees[i].school !== undefined) {
            fourthDetail = employees[i].school;
        }
        
        const card = `
            <div class="card col-md-3 m-2 bg-${employees[i].color} text-white">
                <div class="card-body">
                    <h6 class="card-title py-1">${employees[i].role}</h6>
                    <h3 class="card-title py-2">${employees[i].name}</h3>
                    <ul class="list-group">
                        <li class="list-group-item">${employees[i].id}</li>
                        <li class="list-group-item">${employees[i].email}</li>
                        <li class="list-group-item">${fourthDetail}</li>
                    </ul>
                </div>
            </div>
        `
        cards += card;
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HR Tracker!</title>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
        <!-- cards -->
        <div class="container">
            <div class="py-2 px-5 my-4 bg-light rounded-3">
                <div class="container-fluid py-4">
                  <h1 class="display-5 fw-bold">Our Team</h1>
                  <p class="col-md-8 fs-4">A well balanced team is a beautiful thing. Somewhere inbetween a well balanced composition and a well balanced wheel barrow load.</p>
                </div>
              </div>
            <div class="row">
               ${cards}          
            </div>
        </div>
    
    
    </body>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </html>`
}

module.exports = generateHTML;