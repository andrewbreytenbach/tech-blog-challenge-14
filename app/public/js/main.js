// Function to handle deleting a blog post
const handleDeletePost = async (event) => {
    event.preventDefault();
  
    // Get the blog post ID from the delete button's data attribute
    const postId = event.target.getAttribute('data-id');
  
    try {
      // Send a DELETE request to the server to delete the blog post
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // If the deletion is successful, reload the page to reflect the changes
        location.reload();
      } else {
        // If the deletion fails, display an error message
        throw new Error('Failed to delete blog post');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Add event listeners to all delete buttons
  const deleteButtons = document.querySelectorAll('.delete-post-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', handleDeletePost);
  });
  