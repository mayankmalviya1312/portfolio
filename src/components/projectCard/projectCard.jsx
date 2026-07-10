import { Link } from "react-router-dom";
import "./projectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-category">
        {project.category}
      </div>

      <h3>{project.title}</h3>

      <p>{project.shortDescription}</p>

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <Link
        to={`/project/${project.slug}`}
        className="project-link"
      >
        View Case Study →
      </Link>

    </article>
  );
}

export default ProjectCard;