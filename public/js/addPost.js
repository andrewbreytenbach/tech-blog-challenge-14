// addPost.js

// Function to handle the new post form submission
const handleAddPost = async (event) => {
    event.preventDefault();
  
    // Retrieve user input from the new post form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      // Send a POST request to the create post route
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If creating a new post is successful, redirect to the dashboard page
        document.location.replace('/dashboard');
      } else {
        // If creating a new post fails, display an error message
        alert('Failed to create a new post. Please try again.');
      }
    }
  };
  
  // Add event listener to the new post form submit button
  document.querySelector('#new-post-form').addEventListener('submit', handleAddPost);
  