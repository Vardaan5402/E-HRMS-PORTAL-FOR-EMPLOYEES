require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();   // ✅ app initialized FIRST

// ⭐ Serve the frontend folder (IMPORTANT)
app.use(express.static(path.join(__dirname, "frontend")));

// Middleware
app.use(cors());
app.use(express.json());

// Default route — opens your login page automatically
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

// API test route
app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is connected!" });
});

// Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const jobRoutes = require("./routes/jobRoutes");
const processRoutes = require("./routes/processRoutes");

app.use("/api/process", processRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/jobs", jobRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
