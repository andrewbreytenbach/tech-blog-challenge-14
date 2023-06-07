const Sequelize = require('sequelize');

// Create a new Sequelize instance
let sequelize;

if (process.env.JAWSDB_URL) {
  // For production environment (Heroku, JawsDB)
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
  });
} else {
  // For development and other environments
  sequelize = new Sequelize('tech_blog_db', 'root', 'maverick', {
    host: '127.0.0.1',
    dialect: 'mysql',
  });
}

module.exports = sequelize;
