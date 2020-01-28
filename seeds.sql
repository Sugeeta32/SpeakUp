DROP DATABASE IF EXISTS speakUp_db;
CREATE DATABASE speakUp_db;
USE speakUp_db;

--Creating "users" table--
CREATE TABLE users (
  userID INTEGER NOT NULL AUTO INCREMENT,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  admin BOOLEAN NOT NULL,
  dateJoined DATETIME DEFAULT GETDATE(),
  postNumber INTEGER(10),
  PRIMARY KEY (userID)
);

--Creating "forums" table--
CREATE TABLE forums (
  forumID INTEGER NOT NULL AUTO INCREMENT,
  title VARCHAR(50) NOT NULL,
  description SMALLTEXT,
  userID INTEGER NOT NULL,
  dateCreated DATETIME DEFAULT GETDATE(),
  PRIMARY KEY (forumID),
  FOREIGN KEY (userID) REFERENCES users(userID)
);

--Creating "posts" table--
CREATE TABLE posts (
  postID INTEGER NOT NULL AUTO INCREMENT,
  forumID INTEGER NOT NULL,
  subject VARCHAR(100) NOT NULL,
  content MEDIUMTEXT,
  userID INTEGER NOT NULL,
  datePosted DATETIME DEFAULT GETDATE(),
  PRIMARY KEY (postID),
  FOREIGN KEY (forum) REFERENCES forums(forumID),
  FOREIGN KEY (userID) REFERENCES users(userID)
)