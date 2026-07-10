const express = require("express");

const router = express.Router();

const {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../config/upload");


router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
   upload.single("image"),
  addDoctor
);

router.get("/", getDoctors);

router.get("/:id", getDoctorById);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  updateDoctor
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteDoctor
);

module.exports = router;