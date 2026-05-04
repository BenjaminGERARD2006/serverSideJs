import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

// IMPORT DB CONNECTION
import connectToMongoDB from "./config/db.js";

// IMPORT ROUTES
import studentRouter from "./routes/studentsRoute.js";
import roomRouter from "./routes/roomRoute.js"; // ← your NEW resource

const app = express();
const port = 3000;

// CONNECT TO DATABASE
connectToMongoDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MOUNT ROUTES
app.use("/api/students", studentRouter);
app.use("/api/room", roomRouter); // ← REQUIRED for your assignment

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ...");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
