# 🩺 Book A Doctor - Doctor Appointment Management System

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/API-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Cloudinary](https://img.shields.io/badge/Image%20Storage-Cloudinary-blueviolet)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)
![Render](https://img.shields.io/badge/Deployment-Render-purple)

A full-stack **Doctor Appointment Booking System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The application allows patients to search doctors, view doctor profiles, and book appointments. It also provides doctor and admin management features with secure authentication.

---

# 🚀 Live Demo

## Frontend

https://book-a-doctor-system-e33j-r9ratemfr-sravs5.vercel.app

## Backend API

https://book-a-doctor-system.onrender.com

---

# 📌 Features

## 👤 Patient Features

- User registration and login
- JWT-based authentication
- Browse available doctors
- Search doctors by specialization
- View doctor details
- Book appointments
- View appointment history
- Manage profile

---

## 👨‍⚕️ Doctor Features

- Doctor profile management
- View appointment requests
- Manage availability status
- View patient appointment details

---

## 👨‍💼 Admin Features

- Admin authentication
- Add new doctors
- Update doctor information
- Delete doctors
- Manage users
- Manage appointments

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router

## Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- Middleware

## Database

- MongoDB
- Mongoose ODM

## Cloud Services

- MongoDB Atlas
- Cloudinary
- Render
- Vercel

---

# 🏗️ System Architecture


```
                  User
                    |
                    |
            React Frontend
                    |
                    |
              Axios API Calls
                    |
                    |
            Express.js Server
                    |
      --------------------------------
      |              |               |
 User Routes   Doctor Routes   Appointment Routes
      |              |               |
      --------------------------------
                    |
              MongoDB Database
                    |
              Mongoose ODM
```

---

# 🔄 Application Workflow

1. User opens the React application.
2. User registers or logs into the system.
3. Authentication is handled using JWT tokens.
4. Frontend communicates with backend using REST APIs.
5. Express.js processes user requests.
6. MongoDB stores and retrieves application data.
7. Users can search doctors and book appointments.
8. Admin manages doctors and appointments.

---

# 📂 Project Structure

```
book-a-doctor-system

│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   │
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── screenshots
│
└── README.md
```

---

# 🗄️ Database Design

The project uses MongoDB with three main collections.

## User Collection

```json
{
  "_id": "ObjectId",
  "name": "User Name",
  "email": "user@gmail.com",
  "password": "encrypted password",
  "role": "patient"
}
```

---

## Doctor Collection

```json
{
  "_id": "ObjectId",
  "name": "Dr. Name",
  "specialization": "Cardiologist",
  "experience": 12,
  "consultationFee": 700,
  "hospital": "Apollo Hospital",
  "image": "cloudinary URL",
  "available": true
}
```

---

## Appointment Collection

```json
{
  "_id": "ObjectId",
  "userId": "User ObjectId",
  "doctorId": "Doctor ObjectId",
  "date": "2026-07-20",
  "time": "10:30 AM",
  "status": "confirmed"
}
```

---

# 🔗 Database Relationship

```
User (1)
   |
   |
   | books
   |
   |
Appointment
   |
   |
   | belongs to
   |
Doctor (1)
```

Relationship:

```
User 1 -------- Many Appointments

Doctor 1 ------ Many Appointments
```

---

# 🔌 API Documentation

## User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register user |
| POST | /api/users/login | Login user |

---

## Doctor APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/doctors | Get all doctors |
| POST | /api/doctors | Add doctor |
| PUT | /api/doctors/:id | Update doctor |
| DELETE | /api/doctors/:id | Delete doctor |

---

## Appointment APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/appointments | Create appointment |
| GET | /api/appointments | Get appointments |
| PUT | /api/appointments/:id | Update appointment |
| DELETE | /api/appointments/:id | Cancel appointment |

---

# ⚙️ Installation and Setup

## Clone Repository

```bash
git clone https://github.com/your-username/book-a-doctor-system.git
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Run backend:

```bash
npm start
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

---

# 🔐 Authentication

Security features:

- JWT authentication
- Password encryption
- Protected routes
- Role-based authorization

User Roles:

- Patient
- Doctor
- Admin

---

# 📸 Screenshots

<img width="960" height="540" alt="Screenshot 2026-07-08 210304" src="https://github.com/user-attachments/assets/57f8a3e6-f24b-4636-9932-f2e91a9bb273" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210418" src="https://github.com/user-attachments/assets/25c35caf-0438-4fb1-8856-8157216f3177" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210447" src="https://github.com/user-attachments/assets/45fcb989-1b64-4271-ac48-5ffe6f8d9e21" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210542" src="https://github.com/user-attachments/assets/b32b0577-c646-47e1-b2d0-130170790547" />
<img width="960" height="540" alt="Screenshot 2026-07-08 210644" src="https://github.com/user-attachments/assets/ebe01556-feff-4170-8423-93ed780300dc" />

---

# ✨ Project Highlights

- Complete MERN stack application
- RESTful API architecture
- JWT authentication system
- Role-based access control
- Cloud image upload using Cloudinary
- Responsive user interface
- MongoDB database integration
- Full-stack deployment

---

# 🔮 Future Enhancements

- Online payment integration
- Video consultation
- Email/SMS appointment reminders
- AI-based doctor recommendation
- Digital prescription management
- Patient medical history tracking

---

# 👩‍💻 Author

**Sravani**

Computer Science Engineering Student

GitHub:
https://github.com/DevarapalliSravani05

LinkedIn:
https://linkedin.com/in/sravani-devarapalli-7324a9360

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.