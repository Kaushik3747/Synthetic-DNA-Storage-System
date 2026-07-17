import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import CircularProgress from "../components/CircularProgress";

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

      setStats(
        res.data.stats || {
          totalRecords: 0,
          totalDNABases: 0,
          totalBinaryBits: 0,
          latestUpload: null,
        }
      );
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

      <h1 className="text-5xl font-bold text-cyan-400 mb-10">
        🧬 Synthetic DNA Storage Dashboard
      </h1>

      {/* Statistics Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-slate-900 border-2 ${card.color} rounded-xl p-6 hover:scale-105 transition`}
          >
            <p className="text-gray-400">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

      {/* DNA Analytics */}

      <h2 className="text-3xl font-bold mt-12 mb-6">
        DNA Analytics
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <CircularProgress
          title="GC Content"
          value={52}
        />

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

      {/* Quick Actions */}

      <h2 className="text-3xl font-bold mt-12 mb-6">
        Quick Actions
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">

        <Link
          to="/encode"
          className="bg-cyan-500 hover:bg-cyan-600 rounded-xl p-8 text-center text-2xl font-bold transition"
        >
          🧬 Encode DNA
        </Link>

        <Link
          to="/decode"
          className="bg-green-500 hover:bg-green-600 rounded-xl p-8 text-center text-2xl font-bold transition"
        >
          🔬 Decode DNA
        </Link>

        <Link
          to="/upload"
          className="bg-indigo-500 hover:bg-indigo-600 rounded-xl p-8 text-center text-2xl font-bold transition"
        >
          📁 Upload File
        </Link>

        <Link
          to="/history"
          className="bg-purple-500 hover:bg-purple-600 rounded-xl p-8 text-center text-2xl font-bold transition"
        >
          📜 Storage History
        </Link>

        <Link
          to="/profile"
          className="bg-orange-500 hover:bg-orange-600 rounded-xl p-8 text-center text-2xl font-bold transition lg:col-span-2"
        >
          👤 Profile
        </Link>

      </div>

    </div>
  );
}