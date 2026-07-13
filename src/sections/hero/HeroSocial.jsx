import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function HeroSocial() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/mayankmalviya1312",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:your@email.com",
    },
  ];

  return (
    <div className="hero-social">

      {socialLinks.map((item, index) => (

        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.2,
            rotate: 10,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          {item.icon}
        </motion.a>

      ))}

    </div>
  );
}

export default HeroSocial;