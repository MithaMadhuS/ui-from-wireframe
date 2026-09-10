import dotenv from "dotenv";
// import "dotenv/config";
// Load environment variables
dotenv.config();
import express from "express";
// import cors from "cors";
import generateUIRoute from "./src/routes/generateUI.js";

console.log(process.env.GEMINI_API_KEY);
const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for frontend requests
// app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Wireframe to UI backend is running"
  });
});

// Generate UI code from image
app.use("/generate-ui", generateUIRoute);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
