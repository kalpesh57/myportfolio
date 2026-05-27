import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div
        className="about-content"
        data-aos="fade-up"
      >

        <h2>About Me</h2>

        <p>
          I am a futuristic full stack developer passionate
          about creating immersive modern web experiences
          with React, animations and 3D technologies.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>Frontend</h3>
            <p>
              React, JavaScript, CSS, Framer Motion
            </p>
          </div>

          <div className="about-card">
            <h3>Backend</h3>
            <p>
              Node.js, Express.js, MongoDB
            </p>
          </div>

          <div className="about-card">
            <h3>3D Experience</h3>
            <p>
              Three.js, React Three Fiber
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;