import { useState } from "react";

import "./projects.css";

import projects from "../../data/projects";

import ProjectCard from "../../components/projectCard/projectCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";

import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [search, setSearch] = useState("");

  const filters = [
    "All",
    "React",
    "WordPress",
    "PHP",
    "HTML/CSS",
  ];

const filteredProjects = projects.filter((project) => {

  const matchesCategory =
    activeFilter === "All" ||
    project.technologies.includes(activeFilter);

  const matchesSearch =
    project.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    project.shortDescription
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesCategory && matchesSearch;

});

  return (
    <section className="projects section" id="projects">
      <Container>
        <Reveal>

          <SectionTitle
            subtitle="Featured Projects"
            title="Real Projects I've Built"
            description="A collection of real-world websites and applications I've worked on for businesses and clients."
            center
          />

          <FeaturedProject
            project={projects.find((project) => project.featured)}
          />

          <div className="project-search">

            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

          </div>

          <div className="project-filters">

            {filters.map((filter) => (

              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>

            ))}

          </div>

          <div className="projects-grid">

            {filteredProjects.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
              />

            ))}

          </div>

        </Reveal>
      </Container>
    </section>
  );
}

export default Projects;