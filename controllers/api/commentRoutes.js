const router = require('express').Router();
const { Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Route to create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to update a comment
router.put('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!commentData[0]) {
      res.status(404).json({ message: 'No comment found with this id or you are not authorized to update this comment.' });
      return;
    }

    res.status(200).json({ message: 'Comment updated successfully!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id or you are not authorized to delete this comment.' });
      return;
    }

    res.status(200).json({ message: 'Comment deleted successfully!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to get all comments for a specific blog post
router.get('/post/:postId', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.postId
      },
      include: [
        {
          model: User,
          attributes: ['name']
        }
      ]
    });

    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
