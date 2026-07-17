import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_8px_32px_rgba(0,255,255,0.15)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}