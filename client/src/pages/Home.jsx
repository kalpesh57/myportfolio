import Footer from "../components/Footer";
import Education
  from "./Education";
import Hero from "../components/Hero";
import ParticleBackground from "../components/ParticleBackground";

import Navbar from "../components/Navbar";

import About from "./About";

import Skills from "./Skills";

import Projects from "./Projects";

import Certificates
  from "./Certificates";
import Contact from "./Contact";

const Home = () => {

  return (

    <>
      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <section id="skills">

        <Skills />

      </section>

      <section id="projects">

        <Projects />

      </section>

      <section id="education">

        <Education />

      </section>

      <section id="certificates">

        <Certificates />

      </section>
      <section id="contact">

        <Contact />

      </section>
      <Footer />

    </>

  );

};

export default Home;