// deletePost.js

// Function to handle the delete post button click
const handleDeletePost = async (event) => {
    event.preventDefault();
  
    // Retrieve post id from the URL
    const postId = window.location.pathname.split('/').pop();
  
    if (postId) {
      // Send a DELETE request to the delete post route
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // If deleting the post is successful, redirect to the dashboard page
        document.location.replace('/dashboard');
      } else {
        // If deleting the post fails, display an error message
        alert('Failed to delete the post. Please try again.');
      }
    }
  };
  
  // Add event listener to the delete post button
  document.querySelector('#delete-post-btn').addEventListener('click', handleDeletePost);
  