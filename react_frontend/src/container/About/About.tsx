import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="about-container container grid"
      >
        <motion.div
          className="about-img"
          initial={{ borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
        ></motion.div>

        <div className="about-info">
          <p className="about-desc">
            Starting off as a Pandemic-era hobby, I stumbled into a passion with
            coding and haven't looked back since.
            <br />
            <br />
            Being an Arch-based Linux user and a former Android ROM connoisseur,
            it's been a long overdue move.
            <br />
            <br />
            I'm always eager to be learning and further expanding my horizons
            within this field.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
