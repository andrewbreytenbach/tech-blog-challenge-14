// dashboardRoutes.js

const router = require('express').Router();
const { withAuth } = require('../helpers');
const { dashboard } = require('../controllers/dashboardController');

// Dashboard route
router.get('/', withAuth, dashboard);

module.exports = router;
