import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

import { client } from "../../client";
import { images } from "../../constants";
import "./Resume.scss";

interface ResumeData {
  resumeFile: {
    asset: {
      url: string;
    };
  };
  description: string;
}

export const Resume = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      const query = `*[_type == "resume"][0]{resumeFile {asset->{url}}, description}`;
      const result: ResumeData = await client.fetch(query);
      setResumeData(result);
    };

    fetchResumeData();
  }, []);

  return (
    <section className="resume section" id="résumé">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="resume-bg"
      >
        <div className="resume-container container grid">
          <div className="resume-data">
            <h2 className="resume-title">Résumé</h2>
            <p className="resume-subtitle">Why Choose Me?</p>

            <p className="resume-desc">
              {resumeData?.description || "Let me tell you..."}
            </p>

            <div className="resume-button">
              {resumeData ? (
                <a
                  href={resumeData.resumeFile.asset.url}
                  className="button button-flex button-alt"
                  download
                >
                  Download <FaDownload className="button-icon" />
                </a>
              ) : (
                <button className="button button-flex button-alt" disabled>
                  Download <FaDownload className="button-icon" />
                </button>
              )}
            </div>
          </div>

          <motion.img
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="resume-img"
            src={images.clipboard}
            alt="animated checklist GIF"
          />
        </div>
      </motion.div>
    </section>
  );
};
