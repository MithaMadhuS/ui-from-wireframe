// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Set up storage destination and filename
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Store in the 'uploads' directory
//     },
//     filename: (req, file, cb) => {
//         // Use the original file name
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// // Initialize multer middleware
// const upload = multer({ storage: storage });

// // Define the POST endpoint
// app.post('/upload-endpoint', upload.single('image'), (req, res) => {
//     // 'image' matches the field name used in the frontend FormData
//     if (req.file) {
//         res.status(200).json({
//             message: 'Image uploaded successfully!',
//             filename: req.file.filename,
//             path: req.file.path
//         });
//     } else {
//         res.status(400).json({ message: 'No file received.' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// server.js
import express from "express";
import cors from "cors";
import generateUI from "./routes/generateUI.js";

const app = express();
app.use(cors());

app.use("/generate-ui", generateUI);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
