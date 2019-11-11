CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE user (
    userId INT AUTO_INCREMENT, 
    username VARCHAR(20), 
    firstName VARCHAR(100), 
    lastName VARCHAR(100), 
    PRIMARY KEY (userId)
);

CREATE TABLE tasks (
    userId INT,
    taskId INT AUTO_INCREMENT,
    taskText VARCHAR(70),
    completed BOOLEAN,
    PRIMARY KEY (taskId),
    FOREIGN KEY (userId) REFERENCES user(userId)
);

INSERT INTO user (username, firstName, lastName) VALUES ("caiofp", "Caio", "Pereira");
INSERT INTO user (username, firstName, lastName) VALUES ("luanasm", "Luana", "Marega");

INSERT INTO tasks (userId, taskText, completed) VALUES (1, "walk the dog", true);
INSERT INTO tasks (userId, taskText, completed) VALUES (1, "buy cookies", false);
INSERT INTO tasks (userId, taskText, completed) VALUES (2, "go to the gym", true);
