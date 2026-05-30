import "./Dashboard.css";

import { useState } from "react";

import axios from "axios";

const Dashboard = () => {

  const [name, setName] = useState("");

  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);

    formData.append("image", image);

    try {

      await axios.post(
        `${API_URL}/profile/upload`,
        formData
      );

      alert("Profile Updated");

    } catch (error) {

      console.log(error);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/admin";

  };

  return (
    <section className="dashboard">

      <div className="dashboard-container">

        <h1>Admin Dashboard</h1>

        {/* Profile Section */}

        <form
          className="profile-form"
          onSubmit={handleUpload}
          encType="multipart/form-data"
        >

          <h2>Update Profile</h2>

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
              setImage(e.target.files[0])
            }
          />

          <button type="submit">
            Upload Profile
          </button>

        </form>

        {/* Dashboard Cards */}

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <h3>Projects</h3>

            <p>
              Add, Edit and Delete Projects
            </p>

          </div>

          <div className="dashboard-card">

            <h3>Messages</h3>

            <p>
              View Contact Form Messages
            </p>

          </div>

          <div className="dashboard-card">

            <h3>Certificates</h3>

            <p>
              Manage Certificates
            </p>

          </div>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </section>
  );
};

export default Dashboard;