import "./Resume.css";

import { useEffect, useState }
  from "react";

import axios from "axios";

import { Link }
  from "react-router-dom";

const Resume = () => {

  const [resume,
    setResume] =
    useState(null);

  useEffect(() => {

    fetchResume();

  }, []);

  const fetchResume =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/resume"
          );

        setResume(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <section
      className="resume-page"
    >

      <Link
        to="/"
        className="back-btn"
      >
        ← Back To Portfolio
      </Link>

      <h1>
        My Resume
      </h1>
      <p style={{ color: "white" }}>
        {resume?.resumeFile}
      </p>

      {resume && (

        <>
          <div className="resume-container">

            <a
              href={resume.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="download-btn"
            >
              Open Resume in New Tab
            </a>

          </div>

          <a
            href={resume.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            Download Resume
          </a>

        </>

      )}

    </section>

  );

};

export default Resume;