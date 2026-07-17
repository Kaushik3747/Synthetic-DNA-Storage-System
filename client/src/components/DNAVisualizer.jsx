import { motion } from "framer-motion";

const colors = {
  A: "bg-green-500",
  T: "bg-blue-500",
  C: "bg-purple-500",
  G: "bg-orange-500",
};

export default function DNAVisualizer({ sequence = "" }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-cyan-600 p-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🧬 DNA Sequence Visualizer
      </h2>

      <div className="flex flex-wrap gap-2">

        {sequence.split("").map((base, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.3,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.01,
            }}
            className={`
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            text-white
            font-bold
            shadow-lg
            ${colors[base] || "bg-gray-600"}
            `}
          >
            {base}
          </motion.div>

        ))}

      </div>

    </div>
  );
}