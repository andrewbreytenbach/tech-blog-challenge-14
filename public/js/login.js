// public/js/login.js

// Get the login form element
const loginForm = document.querySelector('#login-form');

// Handle form submission
const handleLoginFormSubmit = async (event) => {
  event.preventDefault();

  // Get the input values
  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (username && password) {
    // Send a POST request to the login route
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the dashboard page on successful login
      document.location.replace('/dashboard');
    } else {
      // Display an error message on login failure
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
};

// Add form submission event listener
loginForm.addEventListener('submit', handleLoginFormSubmit);