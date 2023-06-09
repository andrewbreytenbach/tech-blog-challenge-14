const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Create an instance of Express.js
const app = express();
const PORT = process.env.PORT || 3010;

// Set up session middleware
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);

// Set up Handlebars.js as the view engine
const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoutes = require('./routes/home');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const newPostRoutes = require('./routes/new-post');
const editPostRoutes = require('./routes/edit-post');
const commentRoutes = require('./routes/comments');
const logoutRoutes = require('./routes/logout');

// Routes
app.use('/', homeRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/post/new', newPostRoutes);
app.use('/post/edit', editPostRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users/logout', logoutRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
