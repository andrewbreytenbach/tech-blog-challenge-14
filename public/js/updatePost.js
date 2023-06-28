// updatePost.js

// Function to handle the update post form submission
const handleUpdatePost = async (event) => {
    event.preventDefault();
  
    // Retrieve post id from the URL
    const postId = window.location.pathname.split('/').pop();
  
    // Retrieve user input from the update post form
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (postId && title && content) {
      // Send a PUT request to the update post route
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If updating the post is successful, redirect to the dashboard page
        document.location.replace('/dashboard');
      } else {
        // If updating the post fails, display an error message
        alert('Failed to update the post. Please try again.');
      }
    }
  };
  
  // Add event listener to the update post form submit button
  document.querySelector('#update-post-form').addEventListener('submit', handleUpdatePost);
  