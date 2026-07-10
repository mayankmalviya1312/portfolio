import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-about">
            <a href="#home" className="footer-logo">
              Mayank<span>.</span>
            </a>

            <p>
              Web developer focused on responsive websites, React applications,
              WordPress development, API integrations, and technical website
              troubleshooting.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Services</h3>

            <span>Web Development</span>
            <span>React Development</span>
            <span>WordPress</span>
            <span>API Integration</span>
            <span>Website Troubleshooting</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Mayank. All rights reserved.
          </p>

          <p>
            Built with React & Vite
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;