-- Create Database
CREATE DATABASE crud_project;

-- Select Database
USE crud_project;

-- Create Table
CREATE TABLE students (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    reg_number VARCHAR(50) NOT NULL,
    course VARCHAR(100) NOT NULL
);