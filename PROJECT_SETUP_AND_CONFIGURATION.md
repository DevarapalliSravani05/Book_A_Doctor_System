# PROJECT SETUP AND CONFIGURATION

## Introduction

The **Book a Doctor System** is developed using the MERN (MongoDB, Express.js, React.js, and Node.js) technology stack. The project is divided into two main parts:

* **Frontend** – Developed using React.js
* **Backend** – Developed using Node.js and Express.js

MongoDB is used as the primary database for storing application data.

---

# Software Requirements

| Software           | Version                     |
| ------------------ | --------------------------- |
| Operating System   | Windows 10/11, macOS, Linux |
| Node.js            | v16 or above                |
| npm                | v8 or above                 |
| MongoDB            | Latest                      |
| Visual Studio Code | Latest                      |
| Git                | Latest                      |
| Google Chrome      | Latest                      |

---

# Project Structure

```text
Book_A_Doctor_System/
│
├── backend/
├── frontend/
├── README.md
├── vercel.json
├── PROJECT_ARCHITECTURE.md
└── PROJECT_SETUP_AND_CONFIGURATION.md
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure the required environment variables.

Example:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:

```bash
npm run server
```

or

```bash
npm start
```

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

or

```bash
npm start
```

---

# Database Configuration

MongoDB is used as the application's database.

Steps:

1. Create a MongoDB Atlas account or install MongoDB locally.
2. Create a new database.
3. Copy the connection string.
4. Store the connection string inside the `.env` file.
5. Start the backend server to establish the database connection.

---

# Version Control

Git is used for source code management.

Common Git commands:

```bash
git add .
git commit -m "Project setup completed"
git push origin main
```

---

# Project Configuration Flow

1. Clone the repository.
2. Install backend dependencies.
3. Install frontend dependencies.
4. Configure environment variables.
5. Connect MongoDB.
6. Start the backend server.
7. Start the frontend server.
8. Open the application in the browser.

---

# Output

After successful configuration:

* Backend server runs successfully.
* Frontend loads without errors.
* MongoDB connection is established.
* Users can access the application through the browser.
