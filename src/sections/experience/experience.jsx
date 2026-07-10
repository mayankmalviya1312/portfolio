import "./experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="section-heading experience-heading">
          <span>My Journey</span>
          <h2>Practical experience and continuous learning</h2>

          <p>
            My journey has focused on building real websites, solving
            production issues, learning modern development, and understanding
            how complete web systems work.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-label">
                Web Development
              </span>

              <h3>Frontend & Business Websites</h3>

              <p>
                Built and customized responsive business websites using HTML,
                CSS, JavaScript, reusable sections, sliders, forms, and
                mobile-friendly layouts.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-label">
                CMS & Hosting
              </span>

              <h3>WordPress & Server Management</h3>

              <p>
                Worked with WordPress customization, cPanel hosting, PHP
                versions, DNS, SSL, backups, cron jobs, website migration,
                and troubleshooting live website issues.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-label">
                Modern Development
              </span>

              <h3>React & API Integration</h3>

              <p>
                Expanded into React development, reusable components,
                state-driven interfaces, REST APIs, JSON data, and CRM
                integration workflows.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-label">
                Investigation
              </span>

              <h3>Technical SEO & Website Troubleshooting</h3>

              <p>
                Investigated indexing problems, unexpected URLs, server logs,
                sitemap generation, redirects, Search Console reports, and
                website security-related issues.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;