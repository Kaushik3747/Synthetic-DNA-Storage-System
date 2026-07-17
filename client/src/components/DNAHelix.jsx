import { motion } from "framer-motion";

const colors = {
  A: "bg-green-500",
  T: "bg-blue-500",
  C: "bg-purple-500",
  G: "bg-orange-500",
};

const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

export default function DNAHelix({ sequence = "" }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-cyan-500 p-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
        🧬 DNA Double Helix
      </h2>

      <div className="flex flex-col items-center gap-2">

        {sequence.split("").map((base, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: index % 2 === 0 ? 8 : -8,
            }}
            transition={{
              duration: .4,
              delay: index * .02,
            }}
            className="flex items-center gap-5"
          >

            <motion.div
              whileHover={{ scale: 1.3 }}
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
              ${colors[base]}
              `}
            >
              {base}
            </motion.div>

            <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.3 }}
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
              ${colors[pairs[base]]}
              `}
            >
              {pairs[base]}
            </motion.div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}