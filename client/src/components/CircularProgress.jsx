export default function CircularProgress({ value, title, color = "#06b6d4" }) {
  const r = 55;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r={r}
          stroke="#1e293b"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="70"
          cy="70"
          r={r}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
        />
      </svg>

      <div className="-mt-24 text-center">
        <h2 className="text-3xl font-bold">{value}%</h2>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  );
}