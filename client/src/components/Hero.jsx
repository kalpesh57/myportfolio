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
        "http://localhost:5000/api/hero"
      );

      setHeroData(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="hero">

      <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >

        <h1>
          {heroData.title}
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "3D Web Designer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          {heroData.subtitle}
        </p>

        <button>
          {heroData.buttonText}
        </button>

      </motion.div>

    </section>

  );

};

export default Hero;