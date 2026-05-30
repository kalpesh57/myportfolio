import "./Skills.css";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiPhp,
} from "react-icons/si";

const Skills = () => {

  const [skills, setSkills] =
    useState([]);

  useEffect(() => {

    fetchSkills();

  }, []);

  const fetchSkills = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/skills`
      );

      setSkills(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const categories = {

    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
    ],

    Backend: [
      "Node.js",
      "PHP",
    ],

    Database: [
      "MongoDB",
      "MySQL",
    ],

    "Programming Languages": [
      "C Programming",
      "Java",
      "Python",
    ],

    "Computer Science Fundamentals": [
      "Data Structures",
      "OOP",
      "Database Management",
      "Problem Solving",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "MongoDB Compass",
      "MySQL Workbench",
    ],

  };

  const iconMap = {

    "HTML5": <SiHtml5 />,

    "CSS3": <FaCode />,

    "JavaScript": <SiJavascript />,

    "React.js": <FaReact />,

    "Node.js": <FaNodeJs />,

    "MongoDB": <SiMongodb />,

    "MySQL": <SiMysql />,

    "PHP": <SiPhp />,

    "Java": <FaJava />,

    "Python": <FaPython />,

    "Git": <FaGitAlt />,

    "GitHub": <FaGithub />,

    "VS Code": <FaCode />,

  };

  const getCategory = (
    skillName
  ) => {

    for (
      const category
      in categories
    ) {

      if (
        categories[
          category
        ].includes(skillName)
      ) {

        return category;

      }

    }

    return "Other";

  };

  const groupedSkills = {};

  skills.forEach((skill) => {

    const category =
      getCategory(
        skill.name
      );

    if (
      !groupedSkills[
      category
      ]
    ) {

      groupedSkills[
        category
      ] = [];

    }

    groupedSkills[
      category
    ].push(skill);

  });

  return (

    <section
      className="skills"
    >

      <h1>
        Skills
      </h1>

      {

        Object.keys(
          groupedSkills
        ).map(
          (
            category
          ) => (

            <div
              key={
                category
              }
              className=
              "skill-category"
            >

              <h2>
                {category}
              </h2>

              <div
                className=
                "skills-container"
              >

                {

                  groupedSkills[
                    category
                  ].map(
                    (
                      skill
                    ) => (

                      <div
                        key={
                          skill._id
                        }
                        className=
                        "skill-card"
                      >

                        <span
                          className=
                          "skill-icon"
                        >

                          {

                            iconMap[
                            skill.name
                            ] ||
                            <FaCode />

                          }

                        </span>

                        <span>

                          {
                            skill.name
                          }

                        </span>

                      </div>

                    )
                  )

                }

              </div>

            </div>

          )
        )

      }

    </section>

  );

};

export default Skills;