require("dotenv").config();

const Sequelize = require("sequelize");

DEFAULT_HOST = "localhost";
DEFAULT_USER = "root";
DEFAULT_PORT = 3306;
DEFAULT_DIALECT = "mysql";

let host = process.env.DB_HOST || DEFAULT_HOST;
let port = process.env.DB_PORT || DEFAULT_PORT;
let dialect = process.env.DB_DIALECT || DEFAULT_DIALECT;
let user = process.env.DB_USER || DEFAULT_USER;
let password = process.env.DB_PASSWORD;

let sequelize = new Sequelize(process.env.DB_NAME, user, password, {
  host: host,
  port: port,
  dialect: dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
