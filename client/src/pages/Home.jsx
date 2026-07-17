import TypingText from "../components/TypingText";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center">

      <TypingText text="Synthetic DNA Storage System" />

      <p className="text-gray-400 mt-6 text-xl">
        Store Digital Information Inside DNA Sequences
      </p>

      <button
        className="mt-8 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600"
      >
        Get Started
      </button>

    </div>
  );
}