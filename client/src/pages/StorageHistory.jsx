import { useEffect, useMemo, useState } from "react";
import API from "../services/api";
import toast, { Toaster } from "react-hot-toast";
import HistoryPreviewModal from "../components/HistoryPreviewModal";

import {
  FaCopy,
  FaTrash,
  FaSearch,
  FaFilePdf,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";

export default function StorageHistory() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);

      const res = await API.get("/dna/history");

      setRecords(res.data.data || []);

    } catch (err) {
      console.log(err);

      toast.error("Unable to fetch history");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {

    if (!window.confirm("Delete this DNA record?"))
      return;

    try {

      await API.delete(`/dna/${id}`);

      toast.success("DNA Record Deleted");

      fetchHistory();

    } catch (err) {

      toast.error("Delete Failed");

    }

  };

  const copyDNA = (dna) => {

    navigator.clipboard.writeText(dna);

    toast.success("DNA Copied");

  };

  const filteredRecords = useMemo(() => {

    return records.filter((item) => {

      const keyword = search.toLowerCase();

      const searchMatch =
        item.originalText?.toLowerCase().includes(keyword) ||
        item.fileName?.toLowerCase().includes(keyword) ||
        item.dnaSequence?.toLowerCase().includes(keyword);

      if (filter === "All")
        return searchMatch;

      if (filter === "TXT")
        return (
          searchMatch &&
          (
            item.fileType === "text" ||
            item.fileType === "text/plain"
          )
        );

      if (filter === "PDF")
        return (
          searchMatch &&
          item.fileType === "application/pdf"
        );

      return searchMatch;

    });

  }, [records, search, filter]);

  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <Toaster position="top-right" />

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">

        🧬 DNA Storage History

      </h1>

      {/* Search */}

      <div className="grid md:grid-cols-4 gap-5 mb-8">

        <div className="md:col-span-3 relative">

          <FaSearch
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            value={search}
            placeholder="Search DNA..."
            onChange={(e)=>setSearch(e.target.value)}
            className="
            w-full
            rounded-xl
            bg-slate-900
            border
            border-cyan-600
            py-3
            pl-12
            pr-4
            "
          />

        </div>

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
          className="
          bg-slate-900
          rounded-xl
          border
          border-cyan-600
          px-4
          "
        >
          <option>All</option>
          <option>TXT</option>
          <option>PDF</option>
        </select>

      </div>

      {loading && (

        <div className="text-center">

          Loading...

        </div>

      )}

      {!loading && filteredRecords.length===0 && (

        <div className="text-center text-gray-500 text-xl">

          No DNA Records Found

        </div>

      )}

      <div className="space-y-6">
                {filteredRecords.map((item) => {

          const gc = (
            ((item.dnaSequence.match(/[GC]/g) || []).length /
              item.dnaSequence.length) *
            100
          ).toFixed(2);

          const at = (
            ((item.dnaSequence.match(/[AT]/g) || []).length /
              item.dnaSequence.length) *
            100
          ).toFixed(2);

          return (

            <div
              key={item._id}
              onClick={() => setSelectedRecord(item)}
              className="
              bg-slate-900
              rounded-2xl
              border
              border-cyan-700
              p-6
              cursor-pointer
              hover:border-cyan-400
              hover:shadow-xl
              hover:shadow-cyan-500/20
              transition
              duration-300
              "

            >

              {/* Header */}

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  {item.fileType === "application/pdf" ? (

                    <FaFilePdf
                      className="text-red-500 text-4xl"
                    />

                  ) : (

                    <FaFileAlt
                      className="text-green-400 text-4xl"
                    />

                  )}

                  <div>

                    <h2 className="text-2xl font-bold text-cyan-300">

                      {item.fileName || "Text Input"}

                    </h2>

                    <p className="text-gray-400">

                      {new Date(
                        item.createdAt
                      ).toLocaleString()}

                    </p>

                  </div>

                </div>

                <span className="
                bg-cyan-700
                px-3
                py-1
                rounded-full
                text-sm
                ">

                  {(item.fileType || "TEXT").toUpperCase()}

                </span>

              </div>

              {/* Original Text */}

              <div className="mt-6">

                <h3 className="text-cyan-400 font-semibold">

                  Original Text

                </h3>

                <div className="
                mt-2
                bg-slate-800
                rounded-lg
                p-4
                max-h-36
                overflow-auto
                ">

                  {item.originalText}

                </div>

              </div>

              {/* DNA */}

              <div className="mt-6">

                <h3 className="text-green-400 font-semibold">

                  DNA Sequence

                </h3>

                <div className="
                mt-2
                bg-slate-800
                rounded-lg
                p-4
                break-all
                max-h-36
                overflow-auto
                text-green-300
                ">

                  {item.dnaSequence}

                </div>

              </div>

              {/* Analytics */}

              <div className="
              grid
              md:grid-cols-4
              gap-4
              mt-8
              ">

                <div className="bg-slate-800 rounded-xl p-4">

                  <p className="text-gray-400">

                    DNA Length

                  </p>

                  <h2 className="text-2xl font-bold">

                    {item.dnaSequence.length}

                  </h2>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <p className="text-gray-400">

                    Binary Bits

                  </p>

                  <h2 className="text-2xl font-bold">

                    {item.binaryData.length}

                  </h2>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <p className="text-gray-400">

                    GC %

                  </p>

                  <h2 className="text-2xl font-bold">

                    {gc}%

                  </h2>

                </div>

                <div className="bg-slate-800 rounded-xl p-4">

                  <p className="text-gray-400">

                    AT %

                  </p>

                  <h2 className="text-2xl font-bold">

                    {at}%

                  </h2>

                </div>

              </div>

              {/* Buttons */}

              <div className="
              flex
              flex-wrap
              gap-4
              mt-8
              ">

                <button

                  onClick={(e)=>{

                    e.stopPropagation();

                    copyDNA(item.dnaSequence);

                  }}

                  className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  px-5
                  py-3
                  rounded-lg
                  flex
                  items-center
                  gap-2
                  "

                >

                  <FaCopy />

                  Copy DNA

                </button>

                <button

                  onClick={(e)=>{

                    e.stopPropagation();

                    window.open(
                      `/report/${item._id}`,
                      "_blank"
                    );

                  }}

                  className="
                  bg-green-600
                  hover:bg-green-700
                  px-5
                  py-3
                  rounded-lg
                  flex
                  items-center
                  gap-2
                  "

                >

                  <FaDownload />

                  Report

                </button>

                <button

                  onClick={(e)=>{

                    e.stopPropagation();

                    deleteRecord(item._id);

                  }}

                  className="
                  bg-red-600
                  hover:bg-red-700
                  px-5
                  py-3
                  rounded-lg
                  flex
                  items-center
                  gap-2
                  "

                >

                  <FaTrash />

                  Delete

                </button>

              </div>

            </div>

          );

        })}
              </div>

      {/* Summary */}

      {!loading && filteredRecords.length > 0 && (

        <div className="mt-10 grid md:grid-cols-4 gap-5">

          <div className="bg-slate-900 rounded-xl p-5 border border-cyan-700">

            <p className="text-gray-400">

              Total Records

            </p>

            <h2 className="text-3xl font-bold text-cyan-400 mt-2">

              {filteredRecords.length}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-green-700">

            <p className="text-gray-400">

              Total DNA Bases

            </p>

            <h2 className="text-3xl font-bold text-green-400 mt-2">

              {filteredRecords.reduce(
                (sum, item) => sum + item.dnaSequence.length,
                0
              )}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-yellow-700">

            <p className="text-gray-400">

              Total Binary Bits

            </p>

            <h2 className="text-3xl font-bold text-yellow-400 mt-2">

              {filteredRecords.reduce(
                (sum, item) => sum + item.binaryData.length,
                0
              )}

            </h2>

          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-purple-700">

            <p className="text-gray-400">

              Average DNA Length

            </p>

            <h2 className="text-3xl font-bold text-purple-400 mt-2">

              {filteredRecords.length
                ? Math.round(
                    filteredRecords.reduce(
                      (sum, item) =>
                        sum + item.dnaSequence.length,
                      0
                    ) / filteredRecords.length
                  )
                : 0}

            </h2>

          </div>

        </div>

      )}

      {/* Preview Modal */}

      {selectedRecord && (

        <HistoryPreviewModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />

      )}

    </div>

  );

}