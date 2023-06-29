
// Function to handle the submit event for the comment form
const handleCommentSubmit = async (event) => {
  event.preventDefault();

  // Get the comment text from the form
  const description = document.querySelector('#commentText').value.trim();

  // Get the postId from the URL
  const post_id = window.location.pathname.split('/').pop();

  // Get the user ID from the form (assuming there is an input field with id 'userId')
  const created_by = document.querySelector('#userId').value.trim();

  if (description && post_id && created_by) {
    // Send a POST request to add the comment
    const response = await fetch('/api/comments/', {
      method: 'POST',
      body: JSON.stringify({ description, created_by, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If the comment is added successfully, redirect to the specific post
      document.location.replace('/api/posts/' + post_id);
    } else {
      // If there is an error, display the error message
      const errorMessage = await response.statusText;
      alert(errorMessage);
    }
  }
};

// Add event listener to the comment form submit button
document.querySelector('.new-comment-form').addEventListener('submit', handleCommentSubmit);
