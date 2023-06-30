-- Create the tech_blog_db database
DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db;

USE tech_blog_db;

ALTER TABLE `user`
ADD COLUMN `name` VARCHAR(255) NOT NULL AFTER `email`;
