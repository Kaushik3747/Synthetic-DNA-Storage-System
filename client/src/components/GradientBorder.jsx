export default function GradientBorder({ children }) {
  return (
    <div className="relative p-[2px] rounded-2xl overflow-hidden">

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#9333ea,#06b6d4)]
        animate-[spin_6s_linear_infinite]
        "
      />

      <div className="relative rounded-2xl bg-slate-900">
        {children}
      </div>

    </div>
  );
}