import "./Skills.css";

const skills = [
  {
    name: "HTML",
    level: "95%",
  },
  {
    name: "CSS",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "85%",
  },
  {
    name: "React",
    level: "80%",
  },
  {
    name: "Node.js",
    level: "75%",
  },
  {
    name: "MongoDB",
    level: "70%",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div
        className="skills-content"
        data-aos="fade-up"
      >

        <h2>Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;