const { employee } = require("../models");
const validateEmployeeRequest = (req, res, next) => {
    if (!req.body.name || !req.body.department) {
        res.status(400).send({
            message: "name or department of the employee can't be empty"

        })
        return;
    }
    next();
}
module.exports = { validateEmployeeRequest };