import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-links">

          <a
            href="https://github.com/kalpesh57"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kalpesh-parmar-983a58397/"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kalpehparmar57@gmail.com"
            className="social-btn email"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="copyright">

          Designed & Developed by
          Kalpesh Parmar

        </p>

      </div>

      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>

    </footer>

  );

};

export default Footer;