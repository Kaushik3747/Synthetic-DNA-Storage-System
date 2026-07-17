import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaFilePdf, FaFileAlt } from "react-icons/fa";

export default function UploadBox({
  selectedFile,
  setSelectedFile,
}) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, [setSelectedFile]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: {
      "text/plain": [".txt"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: .95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .4 }}
      {...getRootProps()}
      className={`
      rounded-3xl
      border-2
      border-dashed
      p-12
      cursor-pointer
      transition-all
      duration-300
      backdrop-blur-xl
      bg-white/5
      shadow-xl
      ${
        isDragActive
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-gray-600"
      }
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center">

        <FaCloudUploadAlt
          size={90}
          className="text-cyan-400 animate-bounce"
        />

        <h2 className="text-3xl font-bold mt-6">
          Drag & Drop Files
        </h2>

        <p className="text-gray-400 mt-3">
          Supports TXT and PDF files
        </p>

        <button
          type="button"
          onClick={open}
          className="
          mt-8
          px-8
          py-3
          rounded-xl
          bg-cyan-500
          hover:bg-cyan-600
          font-semibold
          "
        >
          Browse Files
        </button>

        {selectedFile && (

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="
            mt-10
            w-full
            rounded-xl
            bg-slate-900
            border
            border-cyan-500
            p-5
            "
          >

            <div className="flex items-center gap-4">

              {selectedFile.type === "application/pdf" ? (
                <FaFilePdf
                  size={45}
                  className="text-red-500"
                />
              ) : (
                <FaFileAlt
                  size={45}
                  className="text-green-400"
                />
              )}

              <div className="flex-1">

                <h3 className="font-semibold text-lg">
                  {selectedFile.name}
                </h3>

                <p className="text-gray-400">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>

              </div>

            </div>

          </motion.div>

        )}

      </div>

    </motion.div>
  );
}