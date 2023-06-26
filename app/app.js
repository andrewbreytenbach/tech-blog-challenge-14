const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const path = require('path');

// Create Express app
const app = express();

// Set up Handlebars as the view engine
app.engine(
  'handlebars',
  handlebars({
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
const homeRoutes = require('./routes/homeRoutes');
const blogRoutes = require('./routes/blogRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', homeRoutes);
app.use('/blog', blogRoutes);
app.use('/dashboard', dashboardRoutes);

module.exports = app;
