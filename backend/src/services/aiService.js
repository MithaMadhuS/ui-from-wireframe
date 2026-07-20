import ai from "../config/gemini.js";
import SYSTEM_PROMPT from "../prompts/systemPromt.js";
import cleanHtml from "../utils/cleanHtml.js";

export async function generateUI(imageBuffer, mimeType) {
  try {
    const base64Image = imageBuffer.toString("base64");

    const prompt = `
${SYSTEM_PROMPT}

Generate HTML for the uploaded wireframe.
`;

    const response = await ai.models.generateContent({
      // model: "gemini-2.5-flash",
      // model: "gemini-2.5-flash-lite",
      model:  "gemini-3.5-flash",
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

    const html = cleanHtml(response.text);

    return html;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to generate UI");
  }
}
