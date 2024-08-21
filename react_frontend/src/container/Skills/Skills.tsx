import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { client, urlFor } from "../../client";
import "./Skills.scss";

interface Skill {
  _id: string;
  _type: string;
  name: string;
  bgColor: string;
  icon: string;
}

export const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"] | order(_createdAt asc)';

    client.fetch(query).then((data: Skill[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">& Technologies</span>

      <div className="skills-container container">
        <motion.div className="skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item flex"
              key={skill.name}
            >
              <div className="flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="skills-title">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
