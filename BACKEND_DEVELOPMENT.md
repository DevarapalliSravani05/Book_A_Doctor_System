# BACKEND DEVELOPMENT

## Introduction

The backend of the **Book a Doctor System** is developed using **Node.js** and **Express.js**. It provides RESTful APIs that handle user authentication, doctor management, appointment booking, file uploads, and communication with the MongoDB database.

The backend is responsible for processing requests from the frontend, executing business logic, validating user data, and securely storing and retrieving information.

---

# Backend Architecture

The backend follows a modular architecture where each component has a specific responsibility.

```text
Client Request
      │
      ▼
Express Server
      │
      ▼
Routes
      │
      ▼
Controllers
      │
      ▼
Models (MongoDB)
      │
      ▼
Database
```

---

# Backend Folder Structure

```text
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── server.js
├── package.json
└── .env
```

---

# Main Components

## Configuration

The **config** folder contains the application configuration files.

Responsibilities include:

* Database connection
* Cloudinary configuration
* File upload configuration
* Environment variable management

---

## Models

MongoDB collections are represented using Mongoose models.

The backend contains models for:

* User
* Doctor
* Appointment

Each model defines the structure, validation rules, and relationships of the stored data.

---

## Controllers

Controllers contain the business logic of the application.

Typical responsibilities include:

* User registration
* User login
* Doctor profile management
* Appointment booking
* Appointment updates
* Data validation
* Sending responses to the client

---

## Routes

Routes define the API endpoints and map incoming requests to the appropriate controller methods.

Example API groups include:

* User APIs
* Doctor APIs
* Appointment APIs
* Admin APIs

---

## Middleware

Middleware is used to process requests before they reach the controllers.

Functions include:

* JWT authentication
* Authorization
* Error handling
* File upload processing

---

# Authentication

The backend uses **JSON Web Token (JWT)** authentication.

Authentication workflow:

1. User logs in.
2. Server validates credentials.
3. JWT token is generated.
4. Token is returned to the client.
5. Protected APIs verify the token before processing requests.

---

# Database Integration

The backend communicates with MongoDB using **Mongoose**.

Responsibilities include:

* Creating new documents
* Updating existing records
* Fetching data
* Deleting records
* Performing validations

---

# File Upload

Medical reports and other supported files are uploaded securely through the backend.

Uploaded files are validated before being stored and linked to the appropriate user or appointment.

---

# Error Handling

The backend returns meaningful HTTP status codes and JSON responses for:

* Successful requests
* Invalid input
* Unauthorized access
* Resource not found
* Internal server errors

---

# Advantages of the Backend Design

* Modular architecture
* Secure authentication
* Easy maintenance
* Scalable API structure
* Efficient database interaction
* Clean separation of concerns
