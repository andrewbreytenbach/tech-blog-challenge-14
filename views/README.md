# tech-blog-challenge-14

The Tech Blog is a CMS-style blog site where developers can publish their blog posts and interact with other developers through comments. It follows the Model-View-Controller (MVC) architectural pattern and uses technologies such as Handlebars.js, Sequelize, and Express.js.

## About the Project
The Tech Blog provides a platform for developers to share their thoughts, opinions, and insights related to technology. Users can create an account, publish blog posts, comment on other posts, and interact with the community.

The project follows the MVC architectural pattern, separating the application into models, views, and controllers. The models define the database structure and handle data operations using Sequelize as the ORM. The views are rendered using Handlebars.js, a templating engine. The controllers handle the logic and routing of the application using Express.js.

## Features
The Tech Blog includes the following features:

* User authentication: Users can sign up and log in to the site.
* Homepage: Displays existing blog posts and provides navigation links.
* Dashboard: Allows users to view, create, update, and delete their own blog posts.
* Blog post page: Shows the details of a specific blog post, including comments and the option to add new comments.

## Built With
The Tech Blog is built with the following technologies:

* Handlebars.js - Templating engine for rendering views.
* Sequelize - ORM for interacting with the MySQL database.
* Express.js - Web application framework for handling routing and server operations.
* MySQL - Relational database for storing blog posts, users, and comments.
* JavaScript - Programming language for the server-side logic.
* Node.js - JavaScript runtime environment.

## Getting Started
To get started with the Tech Blog, follow these steps:

1. Clone the repository: git clone https://github.com/andrewbreytenbach/tech-blog-challenge-14
2. Change to the project directory: cd tech-blog
3. Install the dependencies: npm install
4. Set up the database: Update the .env file with your MySQL database credentials.
5. Run the database migrations: npm run db:migrate
6. Start the server: node server.js
7. Open your web browser and access the application at http://localhost:3000

## Usage
Once the server is running and you've accessed the application in your web browser, you can use the following functionality:

* Homepage: View existing blog posts, navigate to the dashboard, and log in or sign up.
* Sign up: Create a new user account by providing a username and password.
* Log in: Log in to an existing user account using the username and password.
* Dashboard: View your own blog posts, create new posts, update or delete existing posts.
* Blog post page: View the details of a specific blog post, including comments, and leave new comments.

## Contact
If you have any questions or want to reach out regarding this project, you can contact me through the following channels:

* GitHub: andrewbreytenbach
* View the finished application here: https://tech-blog-challenge-14.herokuapp.com/ 

## Acknowledgments
* Handlebars.js
* Sequelize
* Express.js
* MySQL
* Node.js
* dotenv
* bcrypt
* express-session
* connect-session-sequelize



