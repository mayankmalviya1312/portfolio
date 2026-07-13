import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import "./FeaturedProject.css";

function FeaturedProject({ project }) {
  return (
    <motion.section
      className="featured-project"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="featured-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="featured-content">

        <span className="featured-tag">
          ⭐ Featured Project
        </span>

        <h2>{project.title}</h2>

        <p>{project.overview}</p>

        <div className="featured-tech">

          {project.technologies.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>

        <Link
          to={`/project/${project.slug}`}
          className="featured-button"
        >
          Read Case Study

          <FaArrowRight />
        </Link>

      </div>
    </motion.section>
  );
}

export default FeaturedProject;