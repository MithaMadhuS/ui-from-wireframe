import { generateUI } from "../services/aiService.js";

export async function generateUIController(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const html = await generateUI(
      req.file.buffer,
      req.file.mimetype
    );

    return res.json({
      success: true,
      html,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}