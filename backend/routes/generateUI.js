// routes/generateUI.js
import express from "express";
import multer from "multer";
import { generateUIFromImage } from "../services/aiService.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("wireframe"), async (req, res) => {
  try {
    console.log(req.file.buffer, "req.file.buffer")
    console.log()
    const imageBuffer = req.file.buffer;
    const result = await generateUIFromImage(imageBuffer);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Generation failed" });
  }
});

export default router;
