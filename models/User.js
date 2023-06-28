// Importing Model and datatypes
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Define the User model fields and configuration
class User extends Model {
  static associate(models) {
    // Define associations here
  }
}

User.init(
  {
    // Define the id field as an integer primary key that auto-increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the username field as a string
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the email field as a string and validate it as an email address
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define the password field as a string
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Configure the model to use the sequelize connection instance
    sequelize,
    // Set the model name
    modelName: 'user',
    // Automatically add timestamp fields (createdAt, updatedAt)
    timestamps: true,
    // Use underscores instead of camel-casing for automatically added fields
    underscored: true,
    // Make the model name lowercase in the database
    freezeTableName: true,
  }
);

// Export the User model
module.exports = User;
