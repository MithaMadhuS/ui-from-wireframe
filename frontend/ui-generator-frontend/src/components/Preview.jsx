import './Preview.css';
function Preview({ code }) {

  //   const srcDoc = `
  // <!DOCTYPE html>
  // <html>
  //   <head>
  //     <script src="https://cdn.tailwindcss.com"></script>
  //   </head>
  //   <body>
  //     ${code}
  //   </body>
  // </html>
  // `;

  const srcDoc = `
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  </head>

  <body>

  <div id="root"></div>

  <script type="text/babel">

  ${code}

  ReactDOM.createRoot(document.getElementById("root"))
  .render(<App/>);

  </script>

  </body>
  </html>
`;

  return (
    <>
      <div className="panel-title">Live Preview</div>
      <iframe
        title="preview"
        className="preview-frame"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
      />
    </>
  );
}

export default Preview;
