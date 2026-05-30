import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import "./Hero.css";

const Hero = () => {

  const [heroData, setHeroData] =
    useState({
      title: "",
      subtitle: "",
      buttonText: "",
    });

  useEffect(() => {

    fetchHero();

  }, []);

  const fetchHero = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/hero`
      );

      setHeroData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="hero">


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-wrapper"
      >

        <div className="hero-left">

          <div className="hero-content">

            <span className="hero-greeting">
              Hi, I'm
            </span>

            <h1 className="hero-title">
              {heroData.title}
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="typing"
            />

            <p className="hero-description">
              {heroData.subtitle}
            </p>

            <button className="hero-btn">
              {heroData.buttonText}
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard-card">

            <h3>
              Developer Status
            </h3>

            <div className="status-item">
              <span>React</span>
              <span className="online">
                ● Online
              </span>
            </div>

            <div className="status-item">
              <span>Node.js</span>
              <span className="online">
                ● Running
              </span>
            </div>

            <div className="status-item">
              <span>MongoDB</span>
              <span className="online">
                ● Connected
              </span>
            </div>

            <div className="status-item">
              <span>Projects</span>
              <span>
                5+
              </span>
            </div>

            <div className="status-item">
              <span>Experience</span>
              <span>
                Fresher
              </span>
            </div>

          </div>

        </div>

      </motion.div>


    </section>

  );


};

export default Hero;