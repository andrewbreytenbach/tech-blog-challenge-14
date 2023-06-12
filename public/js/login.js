// Selecting the login form element
const loginForm = document.querySelector('#login-form');

// Function to handle the login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collecting the form input values
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (email && password) {
    // Sending a POST request to the login route
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If the login is successful, redirect the user to the dashboard page
      document.location.replace('/dashboard');
    } else {
      // If the login fails, display an error message
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
};

// Adding an event listener to the login form
loginForm.addEventListener('submit', loginFormHandler);
