import ai from "../config/gemini.js";
import REACT_PROMPT from "../prompts/reactPromt.js";
import SYSTEM_PROMPT from "../prompts/systemPromt.js";
import cleanHtml from "../utils/cleanHtml.js";
import cleanReact from "../utils/cleanReact.js";

export async function generateUI(imageBuffer, mimeType) {
  try {
    const base64Image = imageBuffer.toString("base64");

    // const prompt = `${SYSTEM_PROMPT}
    // Generate HTML for the uploaded wireframe.`;

    const prompt = `${REACT_PROMPT}`

    const response = await ai.models.generateContent({
      // model: "gemini-2.5-flash",
      // model: "gemini-2.5-flash-lite",
      // model:  "gemini-3.5-flash",
      model:  "gemini-3.5-flash-lite",

      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
            {
              inlineData: {
                mimeType,
                data: base64Image,
              },
            },
          ],
        },
      ],
    });

    // const html = cleanHtml(response.text);
    const react = cleanReact(response.text)
    console.log("react", react)
    return react;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate UI");
  }
}
