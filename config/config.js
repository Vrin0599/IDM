const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "postgres",
    password: "12345",
    database: "IDM_v1",
    host: "localhost",
    dialect: "postgres",
    FRAMEWORK_SHELL_URL: "http://dev-framework-api.crayond.com/api/v1",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
