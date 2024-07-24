This project demonstrates a simple CRUD (Create, Read, Update, Delete) application for managing student information. The application is implemented in two different ways:

Using a local array to perform CRUD operations.
Using a JSON server to persist data.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Local Array CRUD Operations
JSON Server CRUD Operations
Running the Application
API Endpoints
Built With

Getting Started
These instructions will help you set up and run the project on your local machine.

Prerequisites
Node.js (version 18.16.1 or higher)
Angular CLI (version 15.2.11)
JSON Server

Installation
Clone the repository:
git clone https://github.com/someshjagtap/iauro-assignment.git

Install the dependencies:
npm install

Install JSON Server globally if you haven't already:
npm install -g json-server

Usage
Local Array CRUD Operations
In this mode, all CRUD operations are performed locally using an array to store the student data. This is suitable for demonstration purposes and small-scale applications.

JSON Server CRUD Operations
In this mode, CRUD operations are performed using a JSON server, which allows for data persistence. This is suitable for more realistic applications where data needs to be stored and retrieved from a server.


Running the Application
Start the Angular application:
ng serve
The application will be available at http://localhost:4200.

(Optional) Start the JSON Server:
json-server --watch db.json
The JSON server will be available at http://localhost:3000.


API Endpoints
When using the JSON server, the following endpoints are available:

GET /posts: Retrieve all students
GET /posts/:id: Retrieve a student by ID
POST /posts: Create a new student
PUT /posts/:id: Update a student by ID
DELETE /posts/:id: Delete a student by ID

Built With
Angular - The web framework used
JSON Server - Fake REST API for development
