import "./Navbar.css";

import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import {
  FaUser,
  FaCode,
  FaRocket,
  FaCertificate,
  FaEnvelope,
  FaFilePdf,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {

  const [profile, setProfile] =
    useState(null);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile`
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

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {menuOpen
          ? <FaTimes />
          : <FaBars />}

      </div>

      <ul
        className={`nav-links ${menuOpen ? "active" : ""
          }`}
      >

        <li>

          <a
            href="#about"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaUser />

            <span>
              About
            </span>

          </a>

        </li>

        <li>

          <a
            href="#skills"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaCode />

            <span>
              Skills
            </span>

          </a>

        </li>

        <li>

          <a
            href="#projects"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaRocket />

            <span>
              Projects
            </span>

          </a>

        </li>

        <li>

          <a
            href="#certificates"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaCertificate />

            <span>
              Certificates
            </span>

          </a>

        </li>

        <li>

          <a
            href="#contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaEnvelope />

            <span>
              Contact
            </span>

          </a>

        </li>

        <li>

          <Link
            to="/resume"
            className="resume-nav-btn"
            onClick={() =>
              setMenuOpen(false)
            }
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