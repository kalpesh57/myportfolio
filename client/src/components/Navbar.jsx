import "./Navbar.css";

import { useEffect, useState } from "react";

import axios from "axios";

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

          <img
            src={profile.image}
            alt="profile"
            className="profile-image"
          />

        ) : (

          "KP"

        )}

      </div>

      <ul className="nav-links">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">
            Skills
          </a>
        </li>


        <li>

          <a href="#projects">
            Projects
          </a>

        </li>
        <li>

          <a href="#certificates">
            Certificates
          </a>

        </li>


        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;