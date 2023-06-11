const User = require('./User');
const Post = require('./Post');


// Associations
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
});


module.exports = { User, Post };
