const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Associations
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
});

module.exports = { User, Post, Comment };
