function CodeOutput({ code }) {
  return (
    <div>
      <h2 className="font-bold mb-2">Generated Code</h2>
      <textarea
        readOnly
        value={code}
        className="w-full h-80 font-mono border p-2"
      />
    </div>
  );
}

export default CodeOutput;
