import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaGlobe } from "react-icons/fa";

import Badge from "../Badge/Badge";

import "./projectCard.css";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.shortDescription}
        </p>

        <div className="project-technologies">

          {project.technologies.map((technology) => (

            <Badge key={technology}>
              {technology}
            </Badge>

          ))}

        </div>

        <div className="project-actions">

          {project.live && (

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="live-btn"
            >
              <FaGlobe />

              Live Demo
            </a>

          )}

          <Link
            to={`/project/${project.slug}`}
            className="case-btn"
          >
            Case Study

            <FaArrowRight />
          </Link>

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;