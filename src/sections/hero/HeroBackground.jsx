import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <>
      <motion.div
        className="hero-blob hero-blob-1"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero-blob hero-blob-2"
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="hero-blob hero-blob-3"
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </>
  );
}

export default HeroBackground;