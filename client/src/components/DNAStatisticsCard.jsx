export default function DNAStatisticsCard({ analytics }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-cyan-600">

      <h2 className="text-2xl text-cyan-400 mb-5">
        DNA Analytics
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Stat title="DNA Length" value={analytics.dnaLength} />
        <Stat title="Binary Bits" value={analytics.binaryLength} />
        <Stat title="GC %" value={analytics.gcContent} />
        <Stat title="AT %" value={analytics.atContent} />
        <Stat title="Compression" value={analytics.compressionRatio} />
        <Stat
          title="Integrity"
          value={analytics.integrity ? "✔" : "❌"}
        />
        <Stat title="Quality" value={analytics.qualityScore} />
        <Stat
          title="Weight"
          value={analytics.estimatedWeight}
        />

      </div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4">
      <p className="text-gray-400">{title}</p>
      <h3 className="text-xl font-bold text-cyan-300">
        {value}
      </h3>
    </div>
  );
}