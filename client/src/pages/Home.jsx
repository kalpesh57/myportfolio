import Hero from "../components/Hero";

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

      <Navbar />

      <Hero />

      <About />

      <section id="skills">

        <Skills />

      </section>

      <section id="projects">

        <Projects />

      </section>

      <section id="certificates">

        <Certificates />

      </section>
      <section id="contact">

        <Contact />

      </section>

    </>

  );

};

export default Home;