import "./hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Mayank <span>Malviya</span>
          </h1>

          <h2>Web Developer</h2>

          <p className="hero-description">
            I build responsive websites and web applications using
            React, JavaScript, PHP, WordPress, APIs, and modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Web developer workspace illustration" />
        </div>

      </div>
    </section>
  );
}

export default Hero;