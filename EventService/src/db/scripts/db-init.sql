CREATE DATABASE auth_service;

\c auth_service;

CREATE TABLE IF NOT EXISTS users (
    eventId VARCHAR(40) PRIMARY KEY,
    name VARCHAR (40) UNIQUE NOT NULL,
    description VARCHAR (200) NOT NULL,
    studentOrganizationId INT NOT NULL
);