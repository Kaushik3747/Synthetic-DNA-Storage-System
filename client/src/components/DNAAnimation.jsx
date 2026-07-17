export default function DNAAnimation() {
  return (
    <div className="relative flex justify-center items-center h-[450px]">

      <div className="absolute w-2 h-96 bg-cyan-400 rounded-full animate-pulse"></div>

      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-36 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full
          ${i % 2 === 0 ? "rotate-12" : "-rotate-12"}`}
          style={{
            top: `${i * 22}px`,
            animation: `spin ${4 + i * 0.2}s linear infinite`
          }}
        ></div>
      ))}

    </div>
  );
}