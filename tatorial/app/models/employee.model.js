module.exports = (sequelize, Sequelize) => {
    const employee = sequelize.define("employee", {

        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        departmentName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        positionName: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'employee'
    });
    return employee;
};