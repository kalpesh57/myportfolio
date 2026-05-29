import "./Admin.css";

import { useState } from "react";

import { useEffect } from "react";

import axios from "axios";

const Admin = () => {

  const token =
    localStorage.getItem("token");

  const [activeSection, setActiveSection] =
    useState("profile");

  const [loginData, setLoginData] =
    useState({
      email: "",
      password: "",
    });

  const [name, setName] = useState("");

  const [image, setImage] = useState(null);
  const [projects, setProjects] =
    useState([]);

  const [projectData, setProjectData] =


    useState({
      title: "",
      description: "",
      tech: "",
      github: "",
      live: "",
    });
  const [editingProjectId,
    setEditingProjectId] =
    useState(null);
  useEffect(() => {

    fetchProjects();
    fetchMessages();
    fetchHero();
    fetchSkills();
    fetchCertificates();
    fetchResume();

  }, []);
  const [messages, setMessages] =
    useState([]);

  const [heroData, setHeroData] =
    useState({
      title: "",
      subtitle: "",
      buttonText: "",
    });
  const [skills, setSkills] =
    useState([]);

  const [skillName, setSkillName] =
    useState("");
  const [editingSkillId,
    setEditingSkillId] =
    useState(null);

  const fetchProjects = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const addProject = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/projects",
        projectData
      );

      alert("Project Added");

      fetchProjects();


      setProjectData({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
      });

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProject = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`
      );

      alert("Project Deleted");

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };
  const editProject = (project) => {

    setProjectData({
      title: project.title,
      description: project.description,
      tech: project.tech,
      image: project.image,
      github: project.github,
      live: project.live,
    });

    setEditingProjectId(
      project._id
    );

  };

  const updateProject = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/projects/${editingProjectId}`,
        projectData
      );

      alert("Project Updated");

      setEditingProjectId(null);

      setProjectData({
        title: "",
        description: "",
        tech: "",
        image: "",
        github: "",
        live: "",
      });

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };

  const fetchMessages = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setMessages(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteMessage = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      alert("Message Deleted");

      fetchMessages();

    } catch (error) {

      console.log(error);

    }

  };
  const fetchHero = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/hero"
      );

      setHeroData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateHero = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/hero",
        heroData
      );

      alert("Hero Updated");

    } catch (error) {

      console.log(error);

    }

  };
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

  const addSkill = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/skills",
        {
          name: skillName,
        }
      );

      alert("Skill Added");

      setSkillName("");

      fetchSkills();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteSkill = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/skills/${id}`
      );

      alert("Skill Deleted");

      fetchSkills();

    } catch (error) {

      console.log(error);

    }

  };
  const editSkill = (skill) => {

    setSkillName(skill.name);

    setEditingSkillId(
      skill._id
    );

  };

  const [certificates,
    setCertificates] =
    useState([]);

  const [certificateData,
    setCertificateData] =
    useState({
      title: "",
      organization: "",
      issueDate: "",
      image: "",
    });


  const [editingCertificateId,
    setEditingCertificateId] =
    useState(null);
  const [resumeTitle,
    setResumeTitle] =
    useState("");

  const [resumeFile,
    setResumeFile] =
    useState(null);

  const [resume,
    setResume] =
    useState(null);

  const [editingResumeId,
    setEditingResumeId] =
    useState(null);

  const updateSkill = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/skills/${editingSkillId}`,
        {
          name: skillName,
        }
      );

      alert("Skill Updated");

      setEditingSkillId(null);

      setSkillName("");

      fetchSkills();

      fetchCertificates();

    } catch (error) {

      console.log(error);

    }

  };
  const fetchCertificates =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/certificates"
          );

        setCertificates(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };
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
  const addResume =
    async (e) => {

      e.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "title",
        resumeTitle
      );

      formData.append(
        "resume",
        resumeFile
      );

      try {

        await axios.post(
          "http://localhost:5000/api/resume",
          formData
        );

        alert(
          "Resume Uploaded"
        );

        fetchResume();

        setResumeTitle("");

        setResumeFile(null);

      } catch (error) {

        console.log(error);

      }

    };
  const deleteResume =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:5000/api/resume/${id}`
        );

        alert(
          "Resume Deleted"
        );

        setResume(null);

        fetchResume();

      } catch (error) {

        console.log(error);

      }

    };
  const editResume =
    (resume) => {

      setResumeTitle(
        resume.title
      );

      setEditingResumeId(
        resume._id
      );

    };
  const updateResume =
    async (e) => {

      e.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "title",
        resumeTitle
      );

      if (resumeFile) {

        formData.append(
          "resume",
          resumeFile
        );

      }

      try {

        await axios.put(
          `http://localhost:5000/api/resume/${editingResumeId}`,
          formData
        );

        alert(
          "Resume Updated"
        );

        setEditingResumeId(
          null
        );

        setResumeTitle("");

        setResumeFile(null);

        fetchResume();

      } catch (error) {

        console.log(error);

      }

    };

  const addCertificate =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "http://localhost:5000/api/certificates",
          certificateData
        );

        alert(
          "Certificate Added"
        );

        fetchCertificates();

        setCertificateData({
          title: "",
          organization: "",
          issueDate: "",
          image: "",
        });

      } catch (error) {

        console.log(error);

      }

    };

  const deleteCertificate =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:5000/api/certificates/${id}`
        );

        alert(
          "Certificate Deleted"
        );

        fetchCertificates();

      } catch (error) {

        console.log(error);

      }

    };

  const editCertificate =
    (certificate) => {

      setCertificateData({
        title: certificate.title,
        organization:
          certificate.organization,
        issueDate:
          certificate.issueDate,
        image: certificate.image,
      });

      setEditingCertificateId(
        certificate._id
      );

    };

  const updateCertificate =
    async (e) => {

      e.preventDefault();

      try {

        await axios.put(
          `http://localhost:5000/api/certificates/${editingCertificateId}`,
          certificateData
        );

        alert(
          "Certificate Updated"
        );

        setEditingCertificateId(
          null
        );

        setCertificateData({
          title: "",
          organization: "",
          issueDate: "",
          image: "",
        });

        fetchCertificates();

      } catch (error) {

        console.log(error);

      }

    };

  // LOGIN

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      window.location.reload();

    } catch (error) {

      alert("Invalid Credentials");

    }

  };

  // PROFILE UPLOAD

  const handleProfileUpload =
    async (e) => {

      e.preventDefault();

      const formData = new FormData();

      formData.append("name", name);

      formData.append("image", image);

      try {

        await axios.post(
          "http://localhost:5000/api/profile/upload",
          formData
        );

        alert("Profile Updated");

      } catch (error) {

        console.log(error);

      }

    };

  // LOGOUT

  const logout = () => {

    localStorage.removeItem("token");

    window.location.reload();

  };

  // LOGIN PAGE

  if (!token) {

    return (

      <section className="admin-login">

        <form
          className="admin-form"
          onSubmit={handleLogin}
        >

          <h2>Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

      </section>

    );

  }

  // CMS PANEL

  return (

    <section className="cms">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>Admin CMS</h2>

        <button
          onClick={() =>
            setActiveSection("profile")
          }
        >
          Profile
        </button>

        <button
          onClick={() =>
            setActiveSection("hero")
          }
        >
          Hero
        </button>

        <button
          onClick={() =>
            setActiveSection("skills")
          }
        >
          Skills
        </button>

        <button
          onClick={() =>
            setActiveSection("projects")
          }
        >
          Projects
        </button>

        <button
          onClick={() =>
            setActiveSection("certificates")
          }
        >
          Certificates
        </button>
        <button
          onClick={() =>
            setActiveSection("resume")
          }
        >
          Resume
        </button>

        <button
          onClick={() =>
            setActiveSection("messages")
          }
        >
          Messages
        </button>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      {/* CONTENT */}

      <div className="cms-content">

        {/* PROFILE */}

        {activeSection === "profile" && (

          <div className="cms-section">

            <h1>Profile</h1>

            <form
              className="cms-form"
              onSubmit={handleProfileUpload}
              encType="multipart/form-data"
            >

              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <input
                type="file"
                onChange={(e) =>
                  setImage(
                    e.target.files[0]
                  )
                }
              />

              <button type="submit">
                Update Profile
              </button>

            </form>

          </div>

        )}

        {/* HERO */}

        {activeSection === "hero" && (

          <div className="cms-section">

            <h1>Hero Section</h1>

            <form
              className="cms-form"
              onSubmit={updateHero}
            >

              <input
                type="text"
                placeholder="Hero Title"
                value={heroData.title}
                onChange={(e) =>
                  setHeroData({
                    ...heroData,
                    title: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Subtitle"
                value={heroData.subtitle}
                onChange={(e) =>
                  setHeroData({
                    ...heroData,
                    subtitle: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Button Text"
                value={heroData.buttonText}
                onChange={(e) =>
                  setHeroData({
                    ...heroData,
                    buttonText: e.target.value,
                  })
                }
              />

              <button type="submit">
                Update Hero
              </button>

            </form>

          </div>

        )}

        {/* SKILLS */}

        {activeSection === "skills" && (

          <div className="cms-section">

            <h1>
              Skills
            </h1>

            <form
              className="cms-form"
              onSubmit={
                editingSkillId
                  ? updateSkill
                  : addSkill
              }
            >

              <input
                type="text"
                placeholder="Skill Name"
                value={skillName}
                onChange={(e) =>
                  setSkillName(
                    e.target.value
                  )
                }
              />

              <button type="submit">
                {editingSkillId
                  ? "Update Skill"
                  : "Add Skill"}
              </button>

            </form>

            <div className="project-list">

              {skills.map((skill) => (

                <div
                  className="project-item"
                  key={skill._id}
                >

                  <h3>
                    {skill.name}
                  </h3>
                  <button
                    onClick={() =>
                      editSkill(skill)
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      deleteSkill(skill._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* PROJECTS */}

        {activeSection === "projects" && (

          <div className="cms-section">

            <h1>Projects</h1>

            <form
              className="cms-form"
              onSubmit={
                editingProjectId
                  ? updateProject
                  : addProject
              }
            >

              <input
                type="text"
                placeholder="Project Title"
                value={projectData.title}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    title: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Description"
                value={projectData.description}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    description: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Tech Stack"
                value={projectData.tech}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    tech: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Project Image URL"
                value={projectData.image}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    image: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="GitHub Link"
                value={projectData.github}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    github: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Live Demo Link"
                value={projectData.live}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    live: e.target.value,
                  })
                }
              />

              <button type="submit">

                {editingProjectId
                  ? "Update Project"
                  : "Add Project"}

              </button>

            </form>

            <div className="project-list">

              {projects.map((project) => (

                <div
                  className="project-item"
                  key={project._id}
                >

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <button
                    onClick={() =>
                      editProject(project)
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      deleteProject(project._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* CERTIFICATES */}

        {activeSection === "certificates" && (

          <div className="cms-section">

            <h1>
              Certificates
            </h1>

            <form
              className="cms-form"
              onSubmit={
                editingCertificateId
                  ? updateCertificate
                  : addCertificate
              }
            >

              <input
                type="text"
                placeholder="Certificate Title"
                value={certificateData.title}
                onChange={(e) =>
                  setCertificateData({
                    ...certificateData,
                    title: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Organization"
                value={certificateData.organization}
                onChange={(e) =>
                  setCertificateData({
                    ...certificateData,
                    organization:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Issue Date"
                value={certificateData.issueDate}
                onChange={(e) =>
                  setCertificateData({
                    ...certificateData,
                    issueDate:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Certificate Image URL"
                value={certificateData.image}
                onChange={(e) =>
                  setCertificateData({
                    ...certificateData,
                    image: e.target.value,
                  })
                }
              />

              <button type="submit">

                {editingCertificateId
                  ? "Update Certificate"
                  : "Add Certificate"}

              </button>

            </form>

            <div className="project-list">

              {certificates.map(
                (certificate) => (

                  <div
                    className="project-item"
                    key={certificate._id}
                  >

                    <h3>
                      {certificate.title}
                    </h3>

                    <p>
                      {certificate.organization}
                    </p>

                    <p>
                      {certificate.issueDate}
                    </p>

                    <button
                      onClick={() =>
                        editCertificate(
                          certificate
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteCertificate(
                          certificate._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </div>

                ))}

            </div>

          </div>

        )}

        {/* RESUME */}

        {activeSection === "resume" && (

          <div className="cms-section">

            <h1>
              Resume
            </h1>

            <form
              className="cms-form"
              onSubmit={
                editingResumeId
                  ? updateResume
                  : addResume
              }
              encType="multipart/form-data"
            >

              <input
                type="text"
                placeholder="Resume Title"
                value={resumeTitle}
                onChange={(e) =>
                  setResumeTitle(
                    e.target.value
                  )
                }
              />

              <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setResumeFile(
                    e.target.files[0]
                  )
                }
              />

              <button type="submit">

                {
                  editingResumeId
                    ? "Update Resume"
                    : "Upload Resume"
                }

              </button>

            </form>

            {resume && (

              <div className="project-item">

                <h3>
                  {resume.title}
                </h3>

                <br />

                <a
                  href={resume.resumeFile}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>

                <br /><br />

                <button
                  onClick={() =>
                    editResume(
                      resume
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteResume(
                      resume._id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            )}

          </div>

        )}

        {/* MESSAGES */}

        {activeSection === "messages" && (

          <div className="cms-section">

            <h1>Messages</h1>

            <div className="project-list">

              {messages.map((msg) => (

                <div
                  className="project-item"
                  key={msg._id}
                >

                  <h3>
                    {msg.name}
                  </h3>

                  <p>
                    {msg.email}
                  </p>

                  <p>
                    {msg.message}
                  </p>

                  <button
                    onClick={() =>
                      deleteMessage(msg._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </section>

  );

};

export default Admin;