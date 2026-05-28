import "./Skills.css";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Skills = () => {

  const [skills, setSkills] =
    useState([]);

  useEffect(() => {

    fetchSkills();

  }, []);

  const fetchSkills = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/skills"
      );

      setSkills(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="skills">

      <h1>
        Skills
      </h1>

      <div className="skills-container">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill._id}
          >

            {skill.name}

          </div>

        ))}

      </div>

    </section>

  );

};

export default Skills;