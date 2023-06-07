// public/js/create-post.js

// Get the create post form element
const createPostForm = document.querySelector('#create-post-form');

// Handle form submission
const handleCreatePostFormSubmit = async (event) => {
  event.preventDefault();

  // Get the input values
  const title = document.querySelector('#title-input').value.trim();
  const content = document.querySelector('#content-input').value.trim();

  if (title && content) {
    // Send a POST request to the create post route
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the dashboard page on successful post creation
      document.location.replace('/dashboard');
    } else {
      // Display an error message on post creation failure
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  }
};

// Add form submission event listener
createPostForm.addEventListener('submit', handleCreatePostFormSubmit);
