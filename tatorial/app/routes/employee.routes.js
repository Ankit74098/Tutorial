const employeeController = require('../controllers/employee.controller');
const { requestValidator } = require('../middlewares');
module.exports = function(app) {
    app.get("/employ/api/v1/employees/:id", employeeController.findOne)
    app.get("/employ/api/v1/employees", employeeController.findAll)
    app.put("/employ/api/v1/employees/:id", [requestValidator.validateEmployeeRequest], employeeController.update)
    app.delete("/employ/api/v1/employees/:id", employeeController.delete)
    app.post("/employ/api/v1/employees", [requestValidator.validateEmployeeRequest], employeeController.create)
}