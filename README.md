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


2. Install dependencies:

   ```bash
   cd blog-rest-api
   npm install
3. Set up environment variables:

   Create a .env file in the root directory.
   Define the following environment variables in the .env file:
   makefile
   
   PORT=5000
   
   MONGODB_URI=mongodb://localhost:27017/blog-db
   
   JWT_SECRET=your_jwt_secret


5. Start the server:

    ```bash
       npm start

6. API Endpoints:

   Authentication
   POST /api/users/signUp: Register a new user.
   
   POST /api/users/login: Log in an existing user.
   
   POST /api/users/logout: Log out the current user (requires authentication).
   
   Blog Posts
   
   GET /api/blogs: Retrieve all blog posts.
   
   POST /api/blogs/add: Add a new blog post (requires authentication).

   GET /api/blogs/:id: Retrieve a specific blog post by ID.
   
   PUT /api/blogs/update/:id: Update a specific blog post by ID (requires authentication).
   
   DELETE /api/blogs/:id: Delete a specific blog post by ID (requires authentication).
   
   GET /api/blogs/users/:id: Retrieve all blog posts belonging to a specific user (requires authentication).

<h2>Contributing</h2>

Contributions are welcome! If you have suggestions, feature requests, or found a bug, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.


Copy code

Replace placeholders like `your-username` and `your_jwt_secret` with your actual GitHub
