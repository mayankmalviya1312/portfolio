import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-heading">
          <span>About Me</span>
          <h2>Building websites and solving real web problems</h2>
        </div>

        <div className="about-content">

          <div className="about-description">
            <p>
              I'm a web developer with practical experience in building
              responsive websites, customizing WordPress projects, developing
              React applications, integrating APIs, and managing websites on
              live hosting environments.
            </p>

            <p>
              My work includes frontend development, PHP and MySQL projects,
              cPanel and server troubleshooting, technical SEO investigation,
              website maintenance, and CRM integration.
            </p>

            <p>
              I enjoy understanding how complete web systems work — from the
              user interface and backend API to databases, hosting, security,
              and deployment.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript and React development.</p>
            </div>

            <div className="highlight-card">
              <h3>Backend</h3>
              <p>PHP, MySQL, REST APIs and form integrations.</p>
            </div>

            <div className="highlight-card">
              <h3>WordPress</h3>
              <p>Theme customization, maintenance and troubleshooting.</p>
            </div>

            <div className="highlight-card">
              <h3>Server & SEO</h3>
              <p>cPanel, hosting, logs and technical SEO investigation.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;