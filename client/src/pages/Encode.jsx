import { useState } from "react";
import API from "../services/api";

const Encode = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEncode = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/dna/encode",
        { text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(res.data.data);
      alert("DNA Encoded & Saved Successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Encoding Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-8">
      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl p-8 border border-cyan-600 shadow-xl">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          DNA Encoder
        </h1>

        <textarea
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full bg-slate-800 p-4 rounded-lg outline-none border border-slate-700"
        />

        <button
          onClick={handleEncode}
          className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg text-xl font-semibold"
        >
          {loading ? "Encoding..." : "Encode & Save"}
        </button>

        {result && (
          <div className="mt-8 space-y-6">

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                Original Text
              </h2>

              <div className="bg-slate-800 p-3 rounded">
                {result.originalText}
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                Binary
              </h2>

              <div className="bg-slate-800 p-3 rounded break-all">
                {result.binaryData}
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                DNA Sequence
              </h2>

              <div className="bg-slate-800 p-3 rounded break-all text-green-400">
                {result.dnaSequence}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Encode;