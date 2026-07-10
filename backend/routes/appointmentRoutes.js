const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  bookAppointment,
  getAppointments,
  getUserAppointments,
  cancelAppointment,
  getAllAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

// Book Appointment
router.post("/", bookAppointment);

// Get All Appointments
router.get("/", getAppointments);

// Admin - Get All Appointments
router.get(
  "/all",
  authMiddleware,
  roleMiddleware("admin"),
  getAllAppointments);

// Update Appointment Status
router.put(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin"),
  updateAppointmentStatus
);

// Get User Appointments
router.get("/:userId", getUserAppointments);

// Cancel Appointment
router.delete("/:id", cancelAppointment);

module.exports = router;