// function Preview({ code }) {
//   console.log(code, "code")
//   const srcDoc = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <script src="https://cdn.tailwindcss.com"></script>
//       </head>
//       <body>
//         <div id="root"></div>
//         <script type="module">
//           import React from "https://esm.sh/react";
//           import ReactDOM from "https://esm.sh/react-dom/client";

//           function Component() {
//           return (
//               ${code}
//             );
//           }

//           ReactDOM.createRoot(document.getElementById("root"))
//             .render(React.createElement(Component));
//         </script>
//       </body>
//     </html>
//   `;

//   return (
//     <div>
//       <h2 className="font-bold mb-2">Preview</h2>
//       <iframe
//         title="preview"
//         srcDoc={srcDoc}
//         className="w-full h-96 border"
//       />
//     </div>
//   );
// }

// export default Preview;
function Preview({ code }) {
  const srcDoc = `
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body { padding: 16px; background: #f9fafb; }
    </style>
  </head>
  <body>
    ${code}
  </body>
</html>
`;

  return (
    <iframe
      title="preview"
      srcDoc={srcDoc}
      className="w-full h-96 border rounded"
      sandbox="allow-scripts"
    />
  );
}

export default Preview;

