import Container from "../../components/Container/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import HeroBackground from "./HeroBackground";

import "./hero.css";

import HeroScroll from "./HeroScroll";

function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />
      <Container>
        <div className="hero-wrapper">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>

      <HeroScroll />

    </section>
  );
}

export default Hero;