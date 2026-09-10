import { useState } from "react";
import UploadForm from "./components/UploadForm";
import CodeOutput from "./components/CodeOutput";
import Preview from "./components/Preview";

function cleanAIHtml(raw) {
  return raw
    .replace(/```html/gi, "")
    .replace(/```/g, "")
    .trim();
}
function App() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateUI(file) {
    setLoading(true);
    setCode("");

    const formData = new FormData();
    formData.append("wireframe", file);

    try {
      // Changing from localhost to /api/generate-ui for reverse proxy
      // const res = await fetch("http://localhost:4000/generate-ui", {
      const res = await fetch("/api/generate-ui", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data, "data");
      setCode(data.html)
      // const cleanedHtml = cleanAIHtml(data.html);
      // setCode(cleanedHtml);
    } catch (err) {
      alert("Generation failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    // <div className="p-6 space-y-6">
    //   <UploadForm onGenerate={generateUI} loading={loading} />
    //   {code &&
    //   <div>
    //     <CodeOutput code={code} />
    //     <Preview code={code} />
    //   </div>}
    // </div>

    <div className="app">
      <header className="header">
        <h1>AI Wireframe Generator</h1>
      </header>

      <section className="toolbar">
        {/* Upload */}
        <UploadForm onGenerate={generateUI} loading={loading} />
      </section>

      {code && 
      <section className="workspace">
        <div className="code-panel"><CodeOutput code={code} /></div>
        

        <div className="preview-panel">
          <Preview code={code} />
        </div>
      </section>
      }
    </div>
  );
}

export default App;
