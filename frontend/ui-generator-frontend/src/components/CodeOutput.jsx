import "./CodeOutput.css";
function CodeOutput({ code }) {
  return (
    <>
      <div className="panel-title">Generated HTML</div>

      <pre className="code-content">{code}</pre>
    </>
  );
}

export default CodeOutput;
