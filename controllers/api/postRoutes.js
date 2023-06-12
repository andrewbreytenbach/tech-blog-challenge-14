const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route to create a new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to update a blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id or you are not authorized to update this post.' });
      return;
    }

    res.status(200).json({ message: 'Post updated successfully!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to delete a blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id or you are not authorized to delete this post.' });
      return;
    }

    res.status(200).json({ message: 'Post deleted successfully!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to get all blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        }
      ]
    });

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to get a single blog post by id
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        }
      ]
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id.' });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
