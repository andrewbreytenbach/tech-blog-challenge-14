const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const blogRoutes = require("./blogRoutes")

// router.use('/users', blogRoutes);
router.use("/blog", blogRoutes)

module.exports = router;