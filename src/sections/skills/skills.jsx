import "./skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-heading skills-heading">
          <span>My Skills</span>
          <h2>Technologies and tools I work with</h2>

          <p>
            My experience covers frontend development, backend integration,
            WordPress, hosting environments, and technical website
            troubleshooting.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article
              className="skill-card"
              key={skillGroup.category}
            >
              <h3>{skillGroup.category}</h3>

              <div className="skill-tags">
                {skillGroup.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;