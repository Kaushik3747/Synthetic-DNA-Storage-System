import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import CircularProgress from "../components/CircularProgress";
import DNAChart from "../components/DNAChart";

<div className="mt-10">

<DNAChart/>

</div>

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalRecords: 0,
    totalDNABases: 0,
    totalBinaryBits: 0,
    latestUpload: null,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/dna/stats");
      setStats(res.data.stats);
    } catch (err) {
      console.log(err);
    }
  };

  const cards = [
    {
      title: "DNA Records",
      value: stats.totalRecords,
      color: "border-cyan-500",
    },
    {
      title: "DNA Bases",
      value: stats.totalDNABases,
      color: "border-green-500",
    },
    {
      title: "Binary Bits",
      value: stats.totalBinaryBits,
      color: "border-yellow-500",
    },
    {
      title: "Last Upload",
      value: stats.latestUpload
        ? new Date(stats.latestUpload).toLocaleDateString()
        : "None",
      color: "border-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold text-cyan-400 mb-8">
        🧬 Synthetic DNA Storage Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-slate-900 rounded-xl border-2 ${card.color} p-6`}
          >
            <p className="text-gray-400">{card.title}</p>

            <h2 className="text-4xl font-bold mt-4">
              {card.value}
            </h2>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-5">
        Quick Actions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          to="/encode"
          className="bg-cyan-500 hover:bg-cyan-600 rounded-xl p-8 text-center text-2xl font-bold"
        >
          🧬 Encode DNA
        </Link>

        <Link
          to="/decode"
          className="bg-green-500 hover:bg-green-600 rounded-xl p-8 text-center text-2xl font-bold"
        >
          🔬 Decode DNA
        </Link>

        <Link
          to="/history"
          className="bg-purple-500 hover:bg-purple-600 rounded-xl p-8 text-center text-2xl font-bold"
        >
          📜 Storage History
        </Link>

        <Link
          to="/profile"
          className="bg-orange-500 hover:bg-orange-600 rounded-xl p-8 text-center text-2xl font-bold"
        >
          👤 Profile
        </Link>

      </div>
    </div>
  );
}
<div className="grid md:grid-cols-4 gap-6 mt-10">
  <CircularProgress title="GC Content" value={52} />

  <CircularProgress
    title="AT Content"
    value={48}
    color="#22c55e"
  />

  <CircularProgress
    title="Compression"
    value={90}
    color="#eab308"
  />

  <CircularProgress
    title="DNA Health"
    value={100}
    color="#ef4444"
  />
</div>