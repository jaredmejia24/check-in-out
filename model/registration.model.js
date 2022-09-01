const { db, DataTypes } = require("../utils/database.utilis");

const Registration = db.define("Registration", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "working",
    allowNull: false,
  },
});

module.exports = { Registration };
