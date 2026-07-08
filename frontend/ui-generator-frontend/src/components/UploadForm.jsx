function UploadForm({ onGenerate, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.wireframe.files[0];
    if (!file) return;
    onGenerate(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="file" name="wireframe" accept="image/*" />
      <button
        disabled={loading}
        className="px-4 py-2 bg-black text-white"
      >
        {loading ? "Generating..." : "Generate UI"}
      </button>
    </form>
  );
}

export default UploadForm;
