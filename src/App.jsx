import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Projects from "./sections/projects/projects";
import Experience from "./sections/experience/experience";
import Contact from "./sections/contact/contact";

import ProjectDetails from "./pages/projectDetails";

import NotFound from "./pages/notFound";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/project/:slug"
          element={<ProjectDetails />}
        />

          <Route
            path="*"
            element={<NotFound />}
          />
          
      </Routes>
    </>
  );
}

export default App;