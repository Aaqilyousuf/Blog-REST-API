# Blog REST API

This project is a RESTful API for managing blog posts and users. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on blog posts, as well as authentication and authorization features for users.

## Features

- **Create, Read, Update, Delete (CRUD) Operations:** Endpoints to create, read, update, and delete blog posts.
- **User Authentication:** Users can sign up, log in, and log out. Authentication is required for certain endpoints.
- **Authorization:** Certain endpoints are protected and can only be accessed by authenticated users with the necessary permissions.
- **Get User's Blog Posts:** Endpoint to retrieve all blog posts belonging to a specific user.

## Technologies Used

- **Node.js:** Backend server environment for running JavaScript code.
- **Express.js:** Web framework for building RESTful APIs in Node.js.
- **MongoDB:** NoSQL database used for storing blog posts and user data.
- **Mongoose:** MongoDB object modeling tool for Node.js.
- **bcrypt.js:** Library for hashing passwords securely.
- **JSON Web Tokens (JWT):** For user authentication and authorization.
- **Postman:** API development environment for testing the endpoints.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-rest-api.git
