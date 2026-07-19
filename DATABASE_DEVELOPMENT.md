# DATABASE DEVELOPMENT

# Introduction

The Book a Doctor System uses **MongoDB** as its primary NoSQL database. MongoDB provides flexibility, scalability, and high performance for storing healthcare-related information such as users, doctors, appointments, and other application data.

The backend communicates with MongoDB using the **Mongoose ODM (Object Data Modeling)** library, which simplifies database operations and schema management.

---

# Database Technology

| Component     | Technology                |
| ------------- | ------------------------- |
| Database      | MongoDB                   |
| ODM           | Mongoose                  |
| Database Type | NoSQL (Document-Oriented) |

---

# Database Architecture

```text
React Frontend
      │
      ▼
Node.js + Express.js
      │
      ▼
Mongoose ODM
      │
      ▼
MongoDB Database
```

---

# Collections

The application stores data in multiple MongoDB collections.

## User Collection

Stores patient and administrator information.

Typical fields include:

* Name
* Email
* Password (Encrypted)
* Role
* Profile Image

---

## Doctor Collection

Stores doctor-related information.

Typical fields include:

* Doctor Name
* Specialization
* Experience
* Consultation Fee
* Availability
* Profile Details

---

## Appointment Collection

Stores appointment booking details.

Typical fields include:

* Patient ID
* Doctor ID
* Appointment Date
* Appointment Time
* Status
* Payment Information (if applicable)

---

# Relationships

Although MongoDB is a NoSQL database, logical relationships exist between collections.

* One Patient → Multiple Appointments
* One Doctor → Multiple Appointments
* One Appointment → One Patient
* One Appointment → One Doctor

---

# CRUD Operations

The backend performs the following database operations:

### Create

* Register new users
* Add doctor profiles
* Book appointments

### Read

* View doctors
* Fetch appointments
* Retrieve user profiles

### Update

* Update profile information
* Modify appointment status
* Edit doctor details

### Delete

* Cancel appointments
* Remove records (if authorized)

---

# Data Validation

Mongoose schemas are used to validate:

* Required fields
* Email format
* Password constraints
* Data types
* Default values

---

# Advantages of MongoDB

* Flexible schema
* Fast data retrieval
* Easy scalability
* JSON-like document storage
* Seamless integration with Node.js

---

# Conclusion

MongoDB and Mongoose provide a robust and scalable data storage solution for the Book a Doctor System. Their flexibility enables efficient management of healthcare information while supporting future enhancements and application growth.
