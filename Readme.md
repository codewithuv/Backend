
<h1 align="center">
  🚀 Industry-Level Backend Setup (Node.js + Express + MongoDB)
</h1>
<p align="center">
  A powerful, scalable, and secure backend setup using modern Node.js stack. <br>
  This repository demonstrates a production-ready Express.js API architecture including JWT auth, file upload, and MongoDB integration.</p>

---

<p align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVkbHVwYm81ZGl0bjNkYXZkamd0djZrY2d0NDEzMndhYTkzNXVuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPJPp6hLXcn4PbOBG/giphy.gif" alt="Animated GIF showing API flow with Postman" width="600" />
</p>

---
## 🌟 Key Features & Tech Stack

This project is built on a robust and popular technology stack, designed for high performance and scalability. Here's a breakdown of the core technologies and their role in the application.

| Technology         | Purpose                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------|
| **Node.js** | The foundation of our backend. Node.js is a powerful JavaScript runtime that allows us to build fast, scalable network applications. It's perfect for a non-blocking, event-driven server. |
| **Express.js** | A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. We use it to handle routing, middleware, and API endpoints. |
| **MongoDB Atlas** | A fully managed, cloud-hosted NoSQL database. MongoDB's document-based structure is highly flexible and perfectly suited for modern, agile development. Atlas makes it easy to set up and scale our database. |
| **Mongoose** | An elegant [ODM](https://mongoosejs.com/docs/api/mongoose.html) (Object Data Modeling) library for Node.js and MongoDB. It provides a straightforward, schema-based solution to model our application data, offering validation and type casting. |
| **dotenv** | A zero-dependency module that loads environment variables from a `.env` file into `process.env`. This is a critical security feature, ensuring sensitive information like database connection strings and secret keys are never hard-coded. |
| **Postman** | An API platform for building and using APIs. We use it extensively for testing our endpoints, from simple GET requests to complex authenticated calls with file uploads. |
| **JWT** | [JSON Web Tokens](https://jwt.io/) are a standard for creating access tokens that assert claims between two parties. We use them for secure, stateless user authentication, which is essential for scalable APIs. |
| **bcryptjs** | A library used to hash passwords. Instead of storing plain-text passwords, `bcryptjs` creates a cryptographically secure hash, making it virtually impossible for an attacker to retrieve the original password even if the database is compromised. |
| **Multer** | A Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. Multer makes it simple to handle file uploads before the data is processed by the main application logic. |
| **Cloudinary** | A cloud-based service that provides a comprehensive solution for managing images and videos. We use it to store our uploaded media files, taking the burden of file storage and optimization off our server. |
| **CORS** | [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a mechanism that allows a web server to permit resources from a different domain. We use the `cors` middleware to enable our frontend application (hosted on a different domain) to safely interact with our API. |
| **Nodemon** | A utility that automatically restarts the Node.js server whenever file changes are detected. This dramatically speeds up the development process by eliminating the need for manual restarts. |

---

## 🔐 Authentication Flow Explained

Our authentication system is built for security and scalability, leveraging the power of JWT.

1.  **Register:** A user provides their email and password. The password is then securely hashed using `bcryptjs` before being stored in the MongoDB database.
  

2.  **Login:** A user submits their credentials. We verify the password by comparing it to the stored hash. If successful, we generate two tokens:
    -   **`accessToken`**: A short-lived token used to authenticate private routes.
    -   **`refreshToken`**: A long-lived token used to generate new `accessTokens` without requiring the user to log in again.

3.  **Protected Routes:** All private routes are protected by a `JWT middleware`. This middleware checks for a valid `accessToken` in the request headers. If the token is missing or invalid, access is denied.

4.  **Token Refresh:** When an `accessToken` expires, the client can use the `refreshToken` to hit a dedicated endpoint. The server validates the `refreshToken` and, if it's valid, issues a brand-new `accessToken`, ensuring a seamless user experience.




## 📂 Folder Structure
This project follows a clean, modular structure to promote maintainability and separation of concerns.

```
project/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   └── authController.js   # Auth logic (JWT, bcrypt, etc.)
├── middleware/
│   ├── authMiddleware.js   # JWT check
│   └── multerConfig.js     # File upload setup
├── models/
│   └── User.js             # Mongoose user schema
├── routes/
│   └── authRoutes.js       # Auth API routes
├── utils/
│   └── asyncHandler.js     # Error handling wrapper
├── uploads/                # Temp upload storage
├── .env                    # Environment variables
├── app.js                  # Express app setup
└── index.js                # Server entry point
```

-----

## 📷 File Upload (Multer + Cloudinary)

  - 🖼️ Upload files via form or API
  - 📦 Stored securely on **Cloudinary**
  - 🔄 Optimized URLs returned for frontend display

-----

## 🛠️ Installation & Setup

1.  **Clone the repo**
    ```bash
    git clone https://github.com/codewithuv/Backend.git
    cd https://github.com/codewithuv/Backend
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Create `.env` file**
    ```ini
    PORT=5000
    CORS_ORIGIN=*
    MONGODB_URI=your_mongo_connection_string
    ACESS_TOKEN_SECRET=your_jwt_secret
    REFRESH_TOKEN_SECRET=your_refresh_secret
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret
    PORT=8000
     ```
5.  **Run in development**
    ```bash
    nodemon -r dotenv/config src/index.js
    ```

-----

### 🧪 API Testing via Postman

  - ✅ Import the Postman collection from the `/postman` folder
  - 🔑 Test authentication headers, login/signup, upload
  - 🔁 Refresh token & protected routes covered

### 🧰 Scripts

| Command         | Description                             |
|-----------------|-----------------------------------------|
| `npm start`     | Run server                              |
| `npm run dev`   | Run with nodemon                        |

-----

### 🛡️ Security Features

  - Passwords hashed with `bcrypt`
  - Tokens securely handled via `JWT`
  - `.env` keeps all credentials safe
  - `CORS` configured for safe frontend-backend communication

-----

### 📬 Contact
Thanku and please ✰
Made with ❤️ by Utkarsh Gupta


🛠️ This project is open to contributions. Feel free to fork and improve it\!
 -[Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

 
>>>>>>> 0257f8a39d6ed0fadbdddd989212c609efab0587
