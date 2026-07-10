import { useNavigate, useParams } from "react-router-dom";

import projects from "../data/projects";

import "./projectDetails.css";


function ProjectDetails() {

  const { slug } = useParams();

  const navigate = useNavigate();


  const project = projects.find(
    (item) => item.slug === slug
  );


  const goBackToProjects = () => {

    navigate("/");

    setTimeout(() => {

      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 100);

  };


  if (!project) {

    return (
      <main className="project-not-found">

        <h1>Project not found</h1>

        <button onClick={goBackToProjects}>
          Return to Projects
        </button>

      </main>
    );

  }


  return (
    <main className="project-details">


      {/* PROJECT HERO */}

      <section className="project-details-hero">

        <div className="project-details-container">


          <button
            type="button"
            className="back-link"
            onClick={goBackToProjects}
          >
            ← Back to Projects
          </button>


          <span className="details-category">
            {project.category}
          </span>


          <h1>
            {project.title}
          </h1>


          <p>
            {project.shortDescription}
          </p>


          <div className="details-technologies">

            {project.technologies.map(
              (technology) => (

                <span key={technology}>
                  {technology}
                </span>

              )
            )}

          </div>


        </div>

      </section>



      {/* CASE STUDY */}

      <section className="case-study-content">

        <div className="project-details-container">


          {/* OVERVIEW */}

          <article className="case-study-block">

            <span>01</span>

            <div>

              <h2>
                Project Overview
              </h2>

              <p>
                {project.overview}
              </p>

            </div>

          </article>



          {/* PROBLEM */}

          <article className="case-study-block">

            <span>02</span>

            <div>

              <h2>
                The Problem
              </h2>

              <p>
                {project.problem}
              </p>

            </div>

          </article>



          {/* SOLUTION */}

          <article className="case-study-block">

            <span>03</span>

            <div>

              <h2>
                My Solution
              </h2>

              <p>
                {project.solution}
              </p>

            </div>

          </article>



          {/* RESPONSIBILITIES */}

          <article className="case-study-block">

            <span>04</span>

            <div>

              <h2>
                My Responsibilities
              </h2>


              <ul className="responsibility-list">

                {project.responsibilities.map(
                  (responsibility) => (

                    <li key={responsibility}>
                      {responsibility}
                    </li>

                  )
                )}

              </ul>

            </div>

          </article>


        </div>

      </section>


    </main>
  );

}


export default ProjectDetails;