const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

module.exports = router;