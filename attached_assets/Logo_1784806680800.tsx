import { motion } from 'framer-motion';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#008A7F" /> {/* Primary */}
            <stop offset="100%" stopColor="#4DB6AC" /> {/* Primary Light */}
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#006D64" /> {/* Primary Dark */}
            <stop offset="100%" stopColor="#FF8A65" /> {/* Accent */}
          </linearGradient>
        </defs>

        {/* Primary Wave (Primary/Light) */}
        <motion.path
          d="M20 30 C 30 30, 35 5, 50 30 C 65 55, 70 5, 80 30"
          stroke="url(#wave-gradient-1)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Secondary Wave (Dark/Accent) - Intertwining */}
        <motion.path
          d="M20 30 C 30 30, 35 55, 50 30 C 65 5, 70 55, 80 30"
          stroke="url(#wave-gradient-2)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Particles */}
        <motion.circle
          cx="35" cy="15" r="2.5"
          fill="#008A7F"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle
          cx="65" cy="45" r="2.5"
          fill="#FF8A65"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <motion.circle
          cx="50" cy="30" r="2"
          fill="#4DB6AC"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
        />
      </svg>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full pointer-events-none" />
    </div>
  );
};
