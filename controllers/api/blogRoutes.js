const router = require("express").Router();
const { BlogPost } = require("../../models");

// Get all blog posts
router.get("/", (req, res) => {
  BlogPost.findAll()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get blog posts by author
router.get("/author/:name", (req, res) => {
  BlogPost.findAll({
    where: {
      author: req.params.name,
    },
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get blog posts by category
router.get("/category/:name", (req, res) => {
  BlogPost.findAll({
    where: {
      category: req.params.name,
    },
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
