import { motion } from "framer-motion";
import {
  // FaMessage,
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { IconType } from "../../constants/types";
import { images } from "../../constants";
import "./Home.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const Home = () => {
  const socials: IconType[] = [
    { title: "github", icon: FaGithub, url: "https://www.github.com/dq-heard" },
    {
      title: "linkedin",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/dq-heard/",
    },
    {
      title: "facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/dq.heard/",
    },
  ];

  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="home-img"
          >
            <motion.svg
              className="home-blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image
                  className="blob-img"
                  x="10"
                  y="10"
                  xlinkHref={images.user}
                />
              </g>
            </motion.svg>
          </motion.div>

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="header-circles home-socials"
          >
            {socials.map((social) => (
              <div className="flex" key={`circle-${social.title}`}>
                <a
                  href={social.url}
                  className="socials-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon />
                </a>
              </div>
            ))}
          </motion.div>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="home-data"
          >
            <div className="badge-cmp">
              <div
                className="home-title"
                role="img"
                aria-label="DeQuentin Heard"
              />
              <h3 className="home-subtitle">Front End Developer</h3>
              <p className="home-desc">
                I'm a meticulous, hard-working guy striving to jump into the
                tech world as a self-taught dev.
              </p>
            </div>

            {/* <a href="#contact" className="button button-flex">
              Contact Me <FaMessage className="button-icon" />
            </a> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="home-scroll"
        >
          <a href="#about" className="button-link button-flex">
            <span className="button-title"> Scroll Down </span>
            <FaArrowDown className="scroll-arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
