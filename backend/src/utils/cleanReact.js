export default function cleanReact(response) {
  if (!response) return "";

  return response
  .replace(/```jsx/g, "")
  .replace(/```javascript/g, "")
  .replace(/```/g, "")
  .replace("export default ", "")
  .trim();


}