const sequelize = require("../config/db.config.js");
const { DataTypes } = require("sequelize");

const Lead = sequelize.define(
  "lead",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username cannot be empty" },
        len: { args: [2, 100], msg: "Username must be between 2 and 100 characters" },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Email cannot be empty" },
        isEmail: { msg: "Email must be a valid email address" },
      },
    },
    image: {
      type: DataTypes.STRING,

    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  { tableName: "leads", timestamps: true }
);

module.exports = Lead;
