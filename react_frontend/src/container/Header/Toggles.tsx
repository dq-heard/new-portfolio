import { useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { NavItems } from "../../constants/utils";
import { NavType, IconType } from "../../constants/types";
import useLocalStorage from "./useLocalStorage";

interface TogglesProps extends Omit<NavType, "toggle" | "setToggle"> {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  sections: IconType[];
}

const Toggles: React.FC<TogglesProps> = ({
  toggle,
  setToggle,
  sections,
  activeSection,
  setActiveSection,
}) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className="nav-btns">
      <div className="theme-toggle" onClick={handleThemeChange}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>

      <div className="nav-toggle">
        <FaBars
          onClick={() => setToggle(true)}
          className={toggle ? "nav-toggle show-menu" : "nav-toggle"}
        />

        {toggle && (
          <motion.div
            whileInView={{ y: [80, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className={toggle ? "mobile-menu show-menu" : "mobile-menu"}
          >
            <FaXmark onClick={() => setToggle(false)} className="nav-close" />

            <NavItems
              sections={sections}
              showIcons={true}
              showEmptyDiv={false}
              onClick={handleLinkClick}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Toggles;
