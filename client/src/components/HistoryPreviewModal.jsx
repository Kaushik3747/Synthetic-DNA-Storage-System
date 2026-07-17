import {
  FaTimes,
  FaCopy,
  FaDownload,
  FaDna,
} from "react-icons/fa";
import DNAHelix from "./DNAHelix";
import toast from "react-hot-toast";
import DNAVisualizer from "./DNAVisualizer";

export default function HistoryPreviewModal({
  record,
  onClose,
}) {
  if (!record) return null;

  const copyDNA = () => {
    navigator.clipboard.writeText(record.dnaSequence);
    toast.success("DNA copied successfully");
  };

  const gc =
    (
      ((record.dnaSequence.match(/[GC]/g) || []).length /
        record.dnaSequence.length) *
      100
    ).toFixed(2);

  const at =
    (
      ((record.dnaSequence.match(/[AT]/g) || []).length /
        record.dnaSequence.length) *
      100
    ).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-slate-900 rounded-2xl border border-cyan-500 w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b border-slate-700 p-6">

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">

              🧬 DNA Record Preview

            </h2>

            <p className="text-gray-400">

              {record.fileName}

            </p>

          </div>

          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-600"
          >
            <FaTimes size={28} />
          </button>

        </div>

        {/* Content */}

        <div className="p-8 space-y-8">

          {/* Original Text */}

          <div>

            <h3 className="text-xl text-cyan-400 mb-3">

              Original Text

            </h3>

            <DNAVisualizer
  sequence={record.dnaSequence}
/>

          </div>

          {/* DNA */}

          <div>

            <h3 className="text-xl text-green-400 mb-3">

              DNA Sequence

            </h3>

           <DNAHelix sequence={record.dnaSequence} />

          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-4 gap-5">

            <Card
              title="DNA Length"
              value={record.dnaSequence.length}
            />

            <Card
              title="Binary Bits"
              value={record.binaryData.length}
            />

            <Card
              title="GC Content"
              value={`${gc}%`}
            />

            <Card
              title="AT Content"
              value={`${at}%`}
            />

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">

            <button
              onClick={copyDNA}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaCopy />

              Copy DNA
            </button>

            <button
              onClick={() =>
                window.open(`/report/${record._id}`)
              }
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaDownload />

              Report
            </button>

            <button
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaDna />

              DNA Analysis
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">

      <p className="text-gray-400">

        {title}

      </p>

      <h2 className="text-2xl font-bold mt-2">

        {value}

      </h2>

    </div>
  );
}