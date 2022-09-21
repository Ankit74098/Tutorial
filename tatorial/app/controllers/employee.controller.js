const db = require("../models");
const Employee = db.employees;

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
    const employeeName = req.query.name;
    let promise;
    if (employeeName) {
        promise = Employee.findAll({
            where: {
                name: employeeName
            }

        })
    } else {
        promise = Employee.findAll();
    }

    promise.then(response => {
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            })
        })
}

// Find a single employee with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findByPk(id)
        .then(response => {
            if (response) {
                res.send(response);
            } else {
                res.status(404).send({
                    message: `Cannot find employee with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving employee with id=" + id
            });
        });
};

// Update a employee by the id in the request
exports.update = (req, res) => {
    const Employee = {
        name: req.body.name,
        age: req.body.age,
        department: req.body.department,
        position: req.body.position
    }

    const employeeId = req.params.id;
    Employee.update(employee, {
            where: { id: employeeId }
        })
        .then(response => {
            console.log(employee, employeeId);
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating employee with id=" + id
            });
        });
};

// Delete a employee with the specified id in the request
exports.delete = (req, res) => {
    const employeeId = req.params.id;
    Employee.destroy({
        where: {
            id: employeeId
        }
    }).then(response => {
        res.sendStatus(200).send(response);
    }).catch(err => {
        res.sendStatus(500).send({
            message: "Error occured while deleting the employee"
        })
    });
};


// Inserting a new employee into the database
exports.create = (req, res) => {
    // creating employee object to be stored in the database
    const employee = {
            name: req.body.name,
            age: req.body.age,
            department: req.body.department,
            position: req.body.position
        }
        // inserting employee object in the database
    Employee.create(employee).then(response => {
        console.log(`employee: [${response} has been inserted in db]`);
        res.status(201).send(response);
    }).catch(err => {
        console.log(`employee: [${err} not inserted in db]`);
        res.status(500).send({
            message: "Some internal error occured while inserting employee data"
        })
    })
}