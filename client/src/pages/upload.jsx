import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import UploadBox from "../components/UploadBox";
import { uploadFile } from "../services/api";

export default function Upload() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");

  const uploadHandler = async () => {
    if (!selectedFile) {
      toast.error("Please choose a TXT or PDF file.");
      return;
    }

    try {
      setUploading(true);

      setStage("Reading File...");
      setProgress(15);

      const formData = new FormData();
      formData.append("file", selectedFile);

      setTimeout(() => {
        setStage("Converting to Binary...");
        setProgress(35);
      }, 300);

      setTimeout(() => {
        setStage("Generating DNA...");
        setProgress(60);
      }, 700);

      const res = await uploadFile(formData);

      setStage("Saving to Database...");
      setProgress(90);

      setTimeout(() => {
        setStage("Completed");
        setProgress(100);
      }, 500);

      toast.success("DNA Stored Successfully!");

      setTimeout(() => {
        navigate("/history");
      }, 1200);

      console.log(res.data);

    } catch (err) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ||
          "Upload failed"
      );
    } finally {
      setTimeout(() => {
        setUploading(false);
        setProgress(0);
        setStage("");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-8 py-10">

      <Toaster position="top-right" />

      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-cyan-400 text-center"
      >
        🧬 DNA Laboratory Upload
      </motion.h1>

      <p className="text-center text-gray-400 mt-3 mb-10">
        Upload a TXT or PDF file to convert it into a DNA sequence.
      </p>

      <div className="max-w-4xl mx-auto">

        <UploadBox
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-xl bg-slate-900 border border-cyan-500 p-6"
          >
            <h2 className="text-xl font-semibold text-cyan-400">
              Selected File
            </h2>

            <div className="mt-4 flex justify-between items-center">

              <div>
                <p className="font-medium">
                  {selectedFile.name}
                </p>

                <p className="text-gray-400 text-sm">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>

              <button
                onClick={uploadHandler}
                disabled={uploading}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  uploading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-600"
                }`}
              >
                {uploading ? "Uploading..." : "Encode & Upload"}
              </button>

            </div>
          </motion.div>
        )}

        {uploading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 rounded-xl bg-slate-900 border border-cyan-500 p-6"
          >
            <h2 className="text-xl font-semibold text-cyan-400 mb-4">
              DNA Processing
            </h2>

            <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">

              <div
                className="bg-cyan-400 h-4 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />

            </div>

            <p className="mt-4 text-gray-300">
              {stage}
            </p>

            <div className="mt-6 font-mono text-cyan-300 text-sm animate-pulse">
              HELLO →
              01001000 →
              ATCGTAGCTAGCT →
              🧬 Stored
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}