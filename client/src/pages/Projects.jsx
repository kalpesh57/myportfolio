import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "3D Portfolio",
    description:
      "Modern futuristic portfolio website with animations and 3D effects.",
    tech: "React • Three.js • Framer Motion",
  },

  {
    title: "E-Library System",
    description:
      "Full stack digital library management system.",
    tech: "React • Django • MySQL",
  },

  {
    title: "Restaurant App",
    description:
      "Premium modern restaurant mobile application UI.",
    tech: "React • Node.js • MongoDB",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <div
        className="projects-content"
        data-aos="fade-up"
      >

        <h2>Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-image"></div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">

                <button>
                  <FaGithub />
                  GitHub
                </button>

                <button>
                  <FiExternalLink />
                  Live Demo
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;