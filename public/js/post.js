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

// Function to handle the new form submission
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const description = document.querySelector('#post-description').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to create post');
    }
  }
};

// Function to handle the delete button click
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to delete Post');
    }
  }
};

// Function to handle the edit button click
const editButtonHandler = async (caller) => {
  if (caller.hasAttribute('data-id')) {
    if (caller.innerHTML == 'Edit') {
      const postId = caller.getAttribute('data-id');
      document.querySelector(`#divEdit${postId}`).classList.remove('hidden');
      caller.innerHTML = 'Cancel';
    } else {
      const postId = caller.getAttribute('data-id');
      document.querySelector(`#divEdit${postId}`).classList.add('hidden');
      caller.innerHTML = 'Edit';
    }
  }
};

// Function to handle the update button click
const updateButtonHandler = async (caller) => {
  if (caller.hasAttribute('data-id')) {
    const id = caller.getAttribute('data-id');
    const description = document.querySelector(`#editdescription${id}`).value.trim();
    const response = await fetch('/api/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify({ description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to update Post');
    }
  }
};

// Function to show/hide the create post section
function showCreatePost() {
  var currentValue = document.querySelector('#btnShowCreatePost').textContent;
  if (currentValue == 'Cancel') {
    document.querySelector('#divCreatePost').classList.add('hidden');
    document.querySelector('#btnShowCreatePost').textContent = 'Create a New Post';
  } else {
    document.querySelector('#divCreatePost').classList.remove('hidden');
    document.querySelector('#btnShowCreatePost').textContent = 'Cancel';
  }
}

try {
  document.querySelector('.new-post-form').addEventListener('submit', handleAddPost);
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  document.querySelector('.delete-post').addEventListener('click', delButtonHandler);
  document.querySelector('#btnShowCreatePost').addEventListener('click', showCreatePost);
} catch (error) {
  console.error('Error:', error);
}
