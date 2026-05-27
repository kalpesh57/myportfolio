import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        <h1>
          Hi, I'm <span>Kalpesh</span>
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
          Building futuristic modern web experiences with React,
          animations and 3D technologies.
        </p>

        <button>
          View Projects
        </button>

      </motion.div>

    </section>
  );
};

export default Hero;