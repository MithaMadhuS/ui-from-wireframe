export default function cleanHtml(response) {
  if (!response) return "";

  return response
    .replace(/```html/gi, "")
    .replace(/```/g, "")
    .trim();
}