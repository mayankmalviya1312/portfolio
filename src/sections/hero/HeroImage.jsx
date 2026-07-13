import { motion } from "framer-motion";

import heroImage from "../../assets/hero.png";

function HeroImage() {
  return (
    <motion.div
      className="hero-image"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <img
        src={heroImage}
        alt="Mayank Malviya"
      />
    </motion.div>
  );
}

export default HeroImage;