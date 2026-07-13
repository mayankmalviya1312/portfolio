import { motion } from "framer-motion";

function HeroStats() {
  const stats = [
    {
      number: "15+",
      label: "Projects",
    },
    {
      number: "20+",
      label: "Web Pages",
    },
    {
      number: "Learning",
      label: "React & PHP",
    },
  ];

  return (
    <div className="hero-stats">

      {stats.map((item, index) => (

        <motion.div
          key={index}
          className="stat-card"
          whileHover={{
            y: -8,
          }}
        >
          <h3>{item.number}</h3>

          <p>{item.label}</p>
        </motion.div>

      ))}

    </div>
  );
}

export default HeroStats;