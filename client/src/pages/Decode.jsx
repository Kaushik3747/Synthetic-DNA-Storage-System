import { useState } from "react";
import API from "../services/api";

export default function Decode() {
  const [dna, setDna] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDecode = async () => {
    if (!dna.trim()) {
      alert("Please enter a DNA sequence");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/dna/decode",
        { dna },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResult(res.data);

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Decode Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center p-10">

      <div className="w-full max-w-5xl">

        <h1 className="text-5xl font-bold text-cyan-400 mb-8">
          DNA Decoder
        </h1>

        <textarea
          rows="6"
          value={dna}
          onChange={(e) => setDna(e.target.value.toUpperCase())}
          placeholder="Paste DNA Sequence..."
          className="w-full bg-slate-900 border border-cyan-700 rounded-lg p-5"
        />

        <button
          onClick={handleDecode}
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg"
        >
          {loading ? "Decoding..." : "Decode DNA"}
        </button>

        {result && (
          <div className="mt-10 space-y-8">

            <div>
              <h2 className="text-cyan-400 text-2xl mb-2">
                Binary
              </h2>

              <div className="bg-slate-900 p-4 rounded break-all">
                {result.binary}
              </div>
            </div>

            <div>
              <h2 className="text-cyan-400 text-2xl mb-2">
                Original Text
              </h2>

              <div className="bg-slate-900 p-4 rounded">
                {result.originalText}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}