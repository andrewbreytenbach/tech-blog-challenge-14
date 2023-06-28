// addComment.js

// Function to handle the submit event for the comment form
const handleCommentSubmit = async (event) => {
    event.preventDefault();
  
    // Get the comment text from the form
    const commentText = document.querySelector('#commentText').value.trim();
  
    // Get the postId from the URL
    const postId = window.location.pathname.split('/').pop();
  
    if (commentText && postId) {
      // Send a POST request to add the comment
      const response = await fetch(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ commentText }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If the comment is added successfully, reload the page to display the new comment
        document.location.reload();
      } else {
        // If there is an error, display the error message
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    }
  };
  
  // Add event listener to the comment form submit button
  document.querySelector('#comment-form').addEventListener('submit', handleCommentSubmit);
  