Book A Doctor System

GitHub Repository: https://github.com/DevarapalliSravani05/Book_A_Doctor_System

---

1. Introduction

Project Title

Book A Doctor System

Team Members

Name| Role
Devarapalli Sravani| Full Stack Developer (Frontend, Backend, Database Integration, Testing & Documentation)

---

2. Project Overview

Purpose

The Book A Doctor System is a full-stack web application that simplifies the process of booking medical appointments online. It enables patients to search for doctors, schedule appointments, and manage their bookings efficiently, while allowing doctors and administrators to manage appointments and user information.

The primary goal of this project is to provide an easy-to-use, secure, and responsive healthcare appointment management system.

Features

- User Registration and Login
- Secure Authentication
- Doctor Listing
- Search Doctors
- Book Appointments
- Appointment Management
- Patient Dashboard
- Doctor Dashboard
- Admin Dashboard
- Responsive User Interface
- MongoDB Database Integration

---

3. Architecture

Frontend

The frontend is developed using React.js.

Responsibilities

- User Interface
- Routing
- API Communication
- Authentication Pages
- Appointment Booking Pages
- Dashboard Components

Technologies Used

- React.js
- React Router
- Axios
- Bootstrap / CSS
- React Hooks

---

Backend

The backend is built using Node.js and Express.js.

Responsibilities

- REST API Development
- Authentication
- Business Logic
- Appointment Processing
- Doctor Management
- User Management
- Database Operations

Technologies Used

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Mongoose

---

Database

MongoDB is used as the primary database.

Collections include:

- Users
- Doctors
- Appointments
- Admin

Database interactions are performed using Mongoose.

---

4. Setup Instructions

Prerequisites

Install the following software:

- Node.js
- npm
- MongoDB
- Git

---

Installation

Step 1

Clone the repository

git clone https://github.com/DevarapalliSravani05/Book_A_Doctor_System.git

Step 2

Navigate to the project

cd Book_A_Doctor_System

Step 3

Install frontend dependencies

cd client
npm install

Step 4

Install backend dependencies

cd ../server
npm install

Step 5

Create a ".env" file inside the server folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

5. Folder Structure

Book_A_Doctor_System
│
├── client
│   ├── public
│   ├── src
│   │   ├── Components
│   │   ├── Pages
│   │   ├── Context
│   │   ├── Services
│   │   ├── App.js
│   │   └── index.js
│
├── server
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── Middleware
│   ├── Config
│   ├── server.js
│   └── package.json
│
├── README.md
└── package.json

---

6. Running the Application

Start Backend

cd server
npm start

Server runs on:

http://localhost:5000

---

Start Frontend

cd client
npm start

Frontend runs on:

http://localhost:3000

---

7. API Documentation

Authentication

Register

POST /api/users/register

Request

{
  "name":"John",
  "email":"john@example.com",
  "password":"123456"
}

Response

{
  "success": true,
  "message": "User Registered Successfully"
}

---

Login

POST /api/users/login

Request

{
  "email":"john@example.com",
  "password":"123456"
}

Response

{
  "token":"JWT_TOKEN"
}

---

Doctors

Get All Doctors

GET /api/doctors

---

Get Doctor by ID

GET /api/doctors/:id

---

Appointments

Book Appointment

POST /api/appointments/book

---

Get User Appointments

GET /api/appointments/user

---

Cancel Appointment

DELETE /api/appointments/:id

---

8. Authentication

Authentication is implemented using JSON Web Tokens (JWT).

Process

1. User registers.
2. Password is encrypted using bcrypt.
3. User logs in.
4. Server generates JWT Token.
5. Token is stored on the client.
6. Every protected API request includes the token.
7. Middleware verifies the token before granting access.

Authorization ensures:

- Patients access only their appointments.
- Doctors manage their schedules.
- Admin has complete system access.

---

9. User Interface

The application contains:

- Home Page
- Login Page
- Registration Page
- Doctor Listing Page
- Book Appointment Page
- User Dashboard
- Doctor Dashboard
- Admin Dashboard


<img width="960" height="540" alt="Screenshot 2026-07-08 210304" src="https://github.com/user-attachments/assets/57f8a3e6-f24b-4636-9932-f2e91a9bb273" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210418" src="https://github.com/user-attachments/assets/25c35caf-0438-4fb1-8856-8157216f3177" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210447" src="https://github.com/user-attachments/assets/45fcb989-1b64-4271-ac48-5ffe6f8d9e21" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210542" src="https://github.com/user-attachments/assets/b32b0577-c646-47e1-b2d0-130170790547" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210644" src="https://github.com/user-attachments/assets/ebe01556-feff-4170-8423-93ed780300dc" />

10. Testing

Testing includes:

- API Testing using Postman
- Manual Functional Testing
- User Authentication Testing
- Appointment Booking Testing
- Database Validation
- Responsive UI Testing

---

11. Screenshots or Demo

Include screenshots of:


<img width="960" height="540" alt="Screenshot 2026-07-08 210304" src="https://github.com/user-attachments/assets/57f8a3e6-f24b-4636-9932-f2e91a9bb273" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210418" src="https://github.com/user-attachments/assets/25c35caf-0438-4fb1-8856-8157216f3177" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210447" src="https://github.com/user-attachments/assets/45fcb989-1b64-4271-ac48-5ffe6f8d9e21" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210542" src="https://github.com/user-attachments/assets/b32b0577-c646-47e1-b2d0-130170790547" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210644" src="https://github.com/user-attachments/assets/ebe01556-feff-4170-8423-93ed780300dc" />

Demo Link:

https://www.linkedin.com/posts/sravani-devarapalli-7324a9360_mernstack-reactjs-nodejs-ugcPost-7479460765289103360-yW0_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFnGGtYBslSNckV6fbztxqCxEdpCtxRbfGU

---

12. Known Issues

- Email notifications are not implemented.
- Appointment reminders are unavailable.
- Online payment integration is pending.
- Video consultation feature is not included.
- Search filtering can be enhanced.

---

13. Future Enhancements

- Online Payment Gateway
- Video Consultation
- Email Notifications
- SMS Appointment Reminders
- AI-based Doctor Recommendation
- Medical History Management
- Prescription Upload
- Rating and Review System
- Multi-language Support
- Mobile Application
- Real-time Chat between Doctor and Patient
- Appointment Calendar Integration

---

Conclusion

The Book A Doctor System is a complete MERN Stack healthcare appointment management solution designed to simplify doctor appointment scheduling. It provides secure authentication, efficient appointment management, and role-based access for patients, doctors, and administrators. The project demonstrates the practical implementation of React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT authentication in building a modern full-stack web application.


