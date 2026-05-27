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
useEffect(() => {

  fetchProjects();

  fetchMessages();

  fetchHero();

}, []);
const [messages, setMessages] =
  useState([]);
  
const [heroData, setHeroData] =
  useState({
    title: "",
    subtitle: "",
    buttonText: "",
  });

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

            <h1>Skills</h1>

            <p>
              Skills CRUD coming next...
            </p>

          </div>

        )}

{/* PROJECTS */}

{activeSection === "projects" && (

  <div className="cms-section">

    <h1>Projects</h1>

    <form
      className="cms-form"
      onSubmit={addProject}
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

      <button type="submit">
        Add Project
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

    <h1>Certificates</h1>

    <p>
      Certificates CRUD coming next...
    </p>

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