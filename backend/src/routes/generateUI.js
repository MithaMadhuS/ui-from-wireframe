import express from "express";
import multer from "multer";

import { generateUIController } from "../controllers/generateUIController.js";

const router = express.Router();

//since we dont need to save the image we use buffer and send it to GEmini
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/",
  upload.single("wireframe"),
  generateUIController
);

export default router;