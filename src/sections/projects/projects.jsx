import "./projects.css";

import projects from "../../data/projects";

import ProjectCard from "../../components/projectCard/projectCard";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-heading projects-heading">

          <span>My Work</span>

          <h2>
            Projects and problems I've worked on
          </h2>

          <p>
            A selection of development, WordPress,
            API integration, hosting, and technical
            SEO work.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;