// Import the Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import the connection instance
const sequelize = require('../config/connection');

// Create the Comment model by extending the Sequelize Model class
class Comment extends Model {}

// Define the Comment model fields and configuration
Comment.init(
  {
    // Define the id field as an integer primary key that auto-increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the commentText field as a string
    commentText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the userId field as an integer and set it as a foreign key referencing the User model
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // Define the postId field as an integer and set it as a foreign key referencing the Post model
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    // Configure the model to use the sequelize connection instance
    sequelize,
    // Set the model name
    modelName: 'comment',
    // Automatically add timestamp fields (createdAt, updatedAt)
    timestamps: true,
    // Use underscores instead of camel-casing for automatically added fields
    underscored: true,
    // Make the model name lowercase in the database
    freezeTableName: true,
  }
);

// Export the Comment model
module.exports = Comment;
