const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

router.get("/stats", async (req, res) => {
  try {
    const users = await User.countDocuments();
    const doctors = await Doctor.countDocuments();
    const appointments = await Appointment.countDocuments();
    const recentAppointments = await Appointment.find()
    .populate("patient", "name")
    .populate("doctor", "name")
    .sort({ createdAt: -1 })
    .limit(5);
    const monthlyStats = await Appointment.aggregate([
  {
    $group: {
      _id: { $month: "$appointmentDate" },
      total: { $sum: 1 },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

    const pending = await Appointment.countDocuments({
      status: "Pending",
    });

    const confirmed = await Appointment.countDocuments({
      status: "Confirmed",
    });

    const completed = await Appointment.countDocuments({
      status: "Completed",
    });

    const cancelled = await Appointment.countDocuments({
      status: "Cancelled",
    });

    res.json({
      success: true,
      users,
      doctors,
      appointments,
      pending,
      confirmed,
      completed,
      cancelled,
      recentAppointments,
       monthlyStats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;