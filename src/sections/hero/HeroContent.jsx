import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";

import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

import heroData from "./heroData";

function HeroContent() {
  return (
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="hero-greeting">
        {heroData.greeting}
      </span>

      <h1 className="hero-name">
        {heroData.name}
      </h1>

      <TypeAnimation
        sequence={[
          "Full Stack Web Developer",
          2000,
          "React Developer",
          2000,
          "WordPress Developer",
          2000,
          "PHP Developer",
          2000,
          "API Integrator",
          2000,
        ]}
        wrapper="h2"
        speed={40}
        repeat={Infinity}
        className="hero-title"
      />

      <p className="hero-description">
        {heroData.description}
      </p>

      <div className="hero-buttons">
        <Button>Hire Me</Button>

        <Button variant="outline">
          Download Resume
        </Button>
      </div>

      <div className="hero-tech">
        {heroData.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

    <HeroSocial />

    <HeroStats />

    </motion.div>
  );
}

export default HeroContent;