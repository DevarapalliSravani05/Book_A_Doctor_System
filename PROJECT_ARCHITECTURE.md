# PROJECT ARCHITECTURE

## Project Title

**Book a Doctor – Healthcare Appointment Booking System**

## Project Overview

The **Book a Doctor System** is a MERN Stack web application developed to simplify the healthcare appointment process. The application allows patients to search for doctors, book appointments, upload medical documents, and manage their healthcare records digitally. Doctors can manage their profiles, availability, and appointments, while administrators oversee the entire system.

The project follows a client-server architecture where the React frontend communicates with a Node.js and Express.js backend through RESTful APIs. MongoDB is used as the database for storing users, doctors, appointments, and related information.

---

# System Architecture

```
+-----------------------+
|      React Client     |
|  (Frontend Interface) |
+-----------+-----------+
            |
            | HTTP / REST API
            |
+-----------v-----------+
|  Node.js + Express.js |
|      Backend API      |
+-----------+-----------+
            |
            |
+-----------v-----------+
|       MongoDB         |
|     Database Server   |
+-----------------------+
```

---

# Architecture Components

## Frontend

* React.js
* React Router
* Axios
* CSS

### Responsibilities

* User Interface
* Authentication
* Doctor Search
* Appointment Booking
* Profile Management

---

## Backend

* Node.js
* Express.js

### Responsibilities

* REST API Development
* User Authentication
* Appointment Management
* Business Logic
* File Upload Handling

---

## Database

MongoDB stores application data in separate collections.

Main collections include:

* Users
* Doctors
* Appointments

---

# Major Modules

## Patient Module

* User Registration
* Login
* Browse Doctors
* Book Appointment
* View Appointment History

## Doctor Module

* Doctor Login
* Manage Profile
* View Appointments
* Update Availability

## Admin Module

* Manage Users
* Manage Doctors
* Manage Appointments
* Monitor System

---

# Technology Stack

| Layer           | Technology                |
| --------------- | ------------------------- |
| Frontend        | React.js, CSS, JavaScript |
| Backend         | Node.js, Express.js       |
| Database        | MongoDB                   |
| Authentication  | JWT                       |
| File Upload     | Multer / Cloudinary       |
| Version Control | Git & GitHub              |

---

# Folder Structure

```
Book_A_Doctor_System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── README.md
├── PROJECT_ARCHITECTURE.md
└── vercel.json
```

---

# Workflow

1. User accesses the application.
2. User registers or logs in.
3. Backend verifies credentials.
4. MongoDB stores or retrieves data.
5. Patient searches for doctors.
6. Appointment request is created.
7. Doctor manages appointments.
8. Administrator monitors the entire system.

---

# Advantages

* Digital appointment management
* Secure authentication
* Easy doctor discovery
* Scalable MERN architecture
* Responsive user interface
* Efficient data management using MongoDB
