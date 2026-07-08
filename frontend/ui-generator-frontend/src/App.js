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
      const res = await fetch("http://localhost:4000/generate-ui", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      // setCode(data.jsx);
      const cleanedHtml = cleanAIHtml(data.jsx);
      setCode(cleanedHtml);
    } catch (err) {
      alert("Generation failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 space-y-6">
      <UploadForm onGenerate={generateUI} loading={loading} />
      {code && <CodeOutput code={code} />}
      {code && <Preview code={code} />}
    </div>
  );
}

export default App;
