import "./Projects.css";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Projects = () => {

  const [projects,
    setProjects] =
    useState([]);

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/projects"
          );

        setProjects(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <section
      className="projects"
      id="projects"
    >

      <h1>
        Projects
      </h1>

      <div
        id="projectCarousel"
        className=
        "carousel slide"
        data-bs-ride=
        "carousel"
      >

        <div
          className=
          "carousel-inner"
        >

          {projects.map(
            (
              project,
              index
            ) => (

              <div

                key={project._id}

                className={`carousel-item ${index === 0
                    ? "active"
                    : ""
                  }`}
              >

                <div
                  className=
                  "project-card"
                >

                  {project.image && (

                    <img
                      src={project.image}
                      className=
                      "project-image"
                      alt={
                        project.title
                      }
                    />

                  )}

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {
                      project.description
                    }
                  </p>

                  <span>
                    {project.tech}
                  </span>

                  <div
                    className=
                    "project-buttons"
                  >

                    <a
                      href={
                        project.github
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>

                    <a
                      href={
                        project.live
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            ))}

        </div>

        <button
          className=
          "carousel-control-prev"
          type="button"
          data-bs-target=
          "#projectCarousel"
          data-bs-slide=
          "prev"
        >

          <span
            className=
            "carousel-control-prev-icon"
          ></span>

        </button>

        <button
          className=
          "carousel-control-next"
          type="button"
          data-bs-target=
          "#projectCarousel"
          data-bs-slide=
          "next"
        >

          <span
            className=
            "carousel-control-next-icon"
          ></span>

        </button>

      </div>

    </section>

  );

};

export default Projects;