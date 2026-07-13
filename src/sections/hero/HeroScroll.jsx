import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

function HeroScroll() {
  return (
    <motion.div
      className="hero-scroll"
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
    >
      <a href="#about">
        <FaChevronDown />
      </a>
    </motion.div>
  );
}

export default HeroScroll;