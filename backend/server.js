const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load .env FIRST
dotenv.config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local development
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Book A Doctor Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

if(require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
module.exports = app;