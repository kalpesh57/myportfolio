import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ParticleBackground from "../components/ParticleBackground";
import FloatingShapes from "../components/FloatingShapes";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      <FloatingShapes />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </>
  );
};

export default Home;