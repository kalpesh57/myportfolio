import "./Education.css";
import { useState } from "react";

const Education = () => {

  const [selectedDegree,
    setSelectedDegree] =
    useState(false);

  const degreeImage =
    `${import.meta.env.VITE_SERVER_URL}/uploads/provisional-degree.jpeg`;
  return (

    <section
      className="education"
      id="education"
    >

      <div className="education-header">

        <span className="education-tag">
          ACADEMIC BACKGROUND
        </span>

        <h1>
          Education
        </h1>

        <p>
          My academic journey and
          qualifications in Computer
          Science.
        </p>

      </div>

      <div className="education-card">

        <div className="education-year">
          2023 - 2026
        </div>

        <div className="education-status">
          🎓 Graduated
        </div>

        <h2>
          Bachelor of Science in
          Computer Science
        </h2>

        <div className="university-info">

          <h3>
            🏛 Sardar Patel University
          </h3>

          <span>
            📍 Anand, Gujarat
          </span>

        </div>

        <p>
          Graduated with a Bachelor of Science
          in Computer Science, building strong
          expertise in programming, web
          development, database management,
          software development, and analytical
          problem solving through academic and
          practical learning.
        </p>

        <button
          className="degree-btn"
          onClick={() =>
            setSelectedDegree(true)
          }
        >
          🎓 View Degree
        </button>

        <div className="education-subjects">

          <h4>
            Technical Foundations
          </h4>

          <div className="skills-tags">

            <span>Programming</span>

            <span>Web Development</span>

            <span>Database Management</span>

            <span>Data Structures</span>

            <span>OOP</span>

            <span>Software Development</span>

          </div>

        </div>

      </div>

      {selectedDegree && (

        <div
          className="degree-modal"
          onClick={() =>
            setSelectedDegree(false)
          }
        >

          <button
            className="degree-back-btn"
            onClick={() =>
              setSelectedDegree(false)
            }
          >
            ← Back
          </button>

          <img
            src={degreeImage}
            alt="Degree Certificate"
            className="degree-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

        </div>

      )}

    </section>

  );

};

export default Education;