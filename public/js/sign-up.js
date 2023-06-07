// public/js/sign-up.js

// Get the sign-up form element
const signUpForm = document.querySelector('#sign-up-form');

// Handle form submission
const handleSignUpFormSubmit = async (event) => {
  event.preventDefault();

  // Get the input values
  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (username && password) {
    // Send a POST request to the sign-up route
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the login page on successful sign-up
      document.location.replace('/login');
    } else {
      // Display an error message on sign-up failure
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
};

// Add form submission event listener
signUpForm.addEventListener('submit', handleSignUpFormSubmit);
