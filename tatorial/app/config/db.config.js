module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Asus@7409",
    DB: "Employees",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};