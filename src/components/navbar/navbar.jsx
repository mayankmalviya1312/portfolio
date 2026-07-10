import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Mayank<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="nav-contact-btn"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;