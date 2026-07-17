import { useEffect, useState } from "react";
import API from "../services/api";

export default function StorageHistory() {

  const [records, setRecords] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/dna/history");
      setRecords(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id) => {

    if (!window.confirm("Delete this DNA Record?"))
      return;

    try {

      await API.delete(`/dna/${id}`);

      fetchHistory();

    } catch (error) {

      console.log(error);

    }

  };

  const filtered = records.filter((item) =>
    item.originalText
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400 mb-8">
        DNA Storage History
      </h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-4 rounded bg-slate-900 mb-8"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="space-y-6">

        {filtered.map((item)=>(

          <div
          key={item._id}
          className="bg-slate-900 rounded-xl p-6 border border-cyan-700"
          >

            <h2 className="text-2xl text-cyan-300">

              {item.fileName}

            </h2>

            <p className="mt-4">

              <b>Original Text</b>

            </p>

            <div className="bg-slate-800 p-3 rounded mt-2">

              {item.originalText}

            </div>

            <p className="mt-4">

              <b>DNA Sequence</b>

            </p>

            <div className="bg-slate-800 p-3 rounded break-all mt-2 text-green-400">

              {item.dnaSequence}

            </div>

            <div className="flex gap-4 mt-6">

              <button
              onClick={()=>navigator.clipboard.writeText(item.dnaSequence)}
              className="bg-cyan-500 px-5 py-2 rounded"
              >

                Copy DNA

              </button>

              <button
              onClick={()=>deleteRecord(item._id)}
              className="bg-red-600 px-5 py-2 rounded"
              >

                Delete

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

}