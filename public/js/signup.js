// signup.js

// Function to handle signup form submission
const handleSignup = async (event) => {
  event.preventDefault();

  // Retrieve user input from the signup form
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    // Send a POST request to the signup route
    const response = await fetch('/dashboard', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If signup is successful, redirect to the dashboard page
      document.location.replace('/dashboard');
    } else {
      // If signup fails, display an error message
      alert('Failed to sign up. Please try again.');
    }
  }
};

// Add event listener to the signup form submit button
document.querySelector('#signup-form').addEventListener('submit', handleSignup);
