const homeController = {
    // Handle GET request for the homepage
    getHomePage: (req, res) => {
      res.render('home/home');
    },
  };
  
  module.exports = homeController;
  