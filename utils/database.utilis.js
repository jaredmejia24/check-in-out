const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "2432004",
  port: 5432,
  database: "check in/out",
  logging: false,
});

module.exports = { db, DataTypes };
