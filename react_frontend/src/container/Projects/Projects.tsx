import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { FaArrowLeft, FaArrowRight, FaCode, FaDisplay } from "react-icons/fa6";

import "./Projects.scss";

interface Project {
  _id: string;
  _type: string;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
  imgUrl: string;
  projectType: string;
  _updatedAt: string;
}

const MAX_PROJECTS_PER_PAGE = 4; // Cap on the number of projects per page

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(MAX_PROJECTS_PER_PAGE); // Default to max cap

  useEffect(() => {
    const query = '*[_type == "projects"] | order(_updatedAt asc)';

    client.fetch(query).then((data: Project[]) => {
      setProjects(data);
    });
  }, []);

  // Function to calculate the number of projects per page
  const calculateProjectsPerPage = useCallback(() => {
    const containerWidth = window.innerWidth;
    const projectWidth = 310; // Width of project card from SCSS
    const margin = 2; // Margin in rem, needs to be converted to px

    // Calculate number of cards per row
    const cardsPerRow = Math.floor(
      containerWidth / (projectWidth + margin * 16)
    ); // 16px = 1rem

    // Cap to max projects per page
    setProjectsPerPage(Math.min(cardsPerRow, MAX_PROJECTS_PER_PAGE));
  }, []);

  useEffect(() => {
    // Calculate projects per page on initial load and on window resize
    calculateProjectsPerPage();
    window.addEventListener("resize", calculateProjectsPerPage);

    return () => {
      window.removeEventListener("resize", calculateProjectsPerPage);
    };
  }, [calculateProjectsPerPage]);

  // Calculate the indices for the projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Pagination handler functions
  const handleNextPage = () => {
    if (currentPage * projectsPerPage < projects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title"> Projects</h2>
      <span className="section-subtitle">My Recent Work</span>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="project-container"
      >
        {currentProjects.map((project) => (
          <div className="project-card flex" key={project._id}>
            <div className="project-img flex">
              <img src={urlFor(project.imgUrl)} alt={project.title} />
              <motion.div
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="project-links flex"
              >
                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    <FaDisplay />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    <FaCode />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="project-text flex">
              <h4>{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaArrowLeft className="arrow arrow-left" />
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(projects.length / projectsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage * projectsPerPage >= projects.length}
        >
          Next
          <FaArrowRight className="arrow arrow-right" />
        </button>
      </div>
    </section>
  );
};
