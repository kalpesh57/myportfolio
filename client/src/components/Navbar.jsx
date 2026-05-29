import "./Navbar.css";

import { useEffect, useState } from "react";

import axios from "axios";

import { Link }
  from "react-router-dom";
import {
  FaUser,
  FaCode,
  FaRocket,
  FaCertificate,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

const Navbar = () => {

  const [profile, setProfile] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/profile"
      );

      setProfile(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <nav className="navbar">

      <div className="logo">

        {profile?.image ? (

          <>
            <img
              src={profile.image}
              alt="profile"
              className="profile-image"
            />

            <h3 className="profile-name">
              Kalpesh Parmar
            </h3>
          </>

        ) : (

          <>
            <div className="profile-placeholder">
              KP
            </div>

            <h3 className="profile-name">
              Kalpesh Parmar
            </h3>
          </>

        )}

      </div>

      <ul className="nav-links">

        <li>
          <a href="#about">
            <FaUser />
            <span>About</span>
          </a>
        </li>

        <li>
          <a href="#skills">
            <FaCode />
            <span>Skills</span>
          </a>
        </li>

        <li>
          <a href="#projects">
            <FaRocket />
            <span>Projects</span>
          </a>
        </li>

        <li>
          <a href="#certificates">
            <FaCertificate />
            <span>Certificates</span>
          </a>
        </li>

        <li>
          <a href="#contact">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </li>
        <li>

          <Link
            to="/resume"
            className="resume-nav-btn"
          >

            <FaFilePdf />

            <span>
              Resume
            </span>

          </Link>

        </li>

      </ul>

    </nav>
  );
};

export default Navbar;