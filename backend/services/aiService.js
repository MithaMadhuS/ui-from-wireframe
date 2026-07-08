// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// const SYSTEM_PROMPT = `You are a senior frontend engineer.

// Rules:
// - Generate clean React functional components
// - Use Tailwind CSS only
// - No markdown
// - No explanations
// - No imports except React
// - Output must be valid JSX`

// const USER_PROMPT = `Analyze the uploaded wireframe image.
// Generate a responsive React component using Tailwind CSS.
// Approximate layout is acceptable.
// `

// export async function generateUIFromImage(imageBuffer) {
//   const base64Image = imageBuffer.toString("base64");

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       { role: "system", content: SYSTEM_PROMPT },
//       {
//         role: "user",
//         content: [
//           { type: "text", text: USER_PROMPT },
//           {
//             type: "image_url",
//             image_url: {
//               url: `data:image/png;base64,${base64Image}`
//             }
//           }
//         ]
//       }
//     ],
//     temperature: 0.2
//   });

//   return {
//     jsx: response.choices[0].message.content
//   };
// }

//------------------------------------------
import fetch from "node-fetch";

// from .env
// const HF_API_TOKEN = process.env.HF_API_TOKEN; 
// const HF_MODEL = "microsoft/Phi-4-multimodal-instruct"; // can try other HF models

// export async function generateUIFromImage(imageBuffer) {
//   const base64Image = imageBuffer.toString("base64");

//   console.log("before AI call")
//   // Send to HF Inference
//   const response = await fetch(
//     // `https://api-inference.huggingface.co/models/${HF_MODEL}`,
//     `https://router.huggingface.co/models/${HF_MODEL}`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HF_API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputs: [
//           {
//             type: "input_image",
//             data: {
//               image: `data:image/png;base64,${base64Image}`
//             }
//           },
//           {
//             type: "input_text",
//             data: `Convert the uploaded wireframe image to responsive React + Tailwind JSX code. Output only valid JSX.`
//           }
//         ]
//       }),
//     }
//   );

//   console.log(response, "response")
//   if (!response.ok) {
//     const errText = await response.text();
//     throw new Error("HF Error: " + errText);
//   }

//   const result = await response.json();

//   // HF inference usually returns plain text
//   return { jsx: result?.generated_text ?? "" };
// }

//----------------------------------------------------

import { HfInference } from "@huggingface/inference";
const hf = new HfInference(HF_API_TOKEN);

// const SYSTEM_PROMPT = `
// You are a senior frontend engineer.
// Generate clean React functional components.
// Use Tailwind CSS only.
// No markdown.
// No explanations.
// Output only valid JSX.
// `;

const SYSTEM_PROMPT = `You are a frontend UI generator.

Rules (must follow strictly):
- Output ONLY valid HTML
- Use Tailwind CSS utility classes
- DO NOT use JSX
- DO NOT use React
- DO NOT use JavaScript
- DO NOT use imports, exports, or components
- Use class="" NOT className
- Output must be directly renderable inside <body>
- Do NOT wrap output in markdown or code fences
`

export async function generateUIFromImage(imageBuffer) {
  const base64Image = imageBuffer.toString("base64");

  const response = await hf.chatCompletion({
    model: "Qwen/Qwen2.5-VL-7B-Instruct",
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT
      },
      {
        role: "user",
        content: [
          { type: "text", text: "Convert this wireframe into React + Tailwind JSX." },
          {
            type: "image_url",
            image_url: {
              url: `data:image/png;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    temperature: 0.2,
    max_tokens: 1500
  });

  console.log(response, "response");

  return {
    jsx: response.choices[0].message.content
  };
}

