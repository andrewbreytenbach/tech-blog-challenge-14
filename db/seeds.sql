-- Insert sample data into the users table
INSERT INTO users (username, email, password, created_at, updated_at) VALUES
('user1', 'user1@example.com', 'password1', NOW(), NOW()),
('user2', 'user2@example.com', 'password2', NOW(), NOW());

-- Insert sample data into the posts table
INSERT INTO posts (title, content, user_id, created_at, updated_at) VALUES
('Post 1', 'This is the content of Post 1', 1, NOW(), NOW()),
('Post 2', 'This is the content of Post 2', 1, NOW(), NOW()),
('Post 3', 'This is the content of Post 3', 2, NOW(), NOW());

-- Insert sample data into the comments table
INSERT INTO comments (comment_text, user_id, post_id, created_at, updated_at) VALUES
('Comment 1 for Post 1', 2, 1, NOW(), NOW()),
('Comment 2 for Post 1', 1, 1, NOW(), NOW()),
('Comment 1 for Post 2', 2, 2, NOW(), NOW());