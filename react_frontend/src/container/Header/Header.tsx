import { useState, useEffect } from "react";
import {
  FaHouse,
  FaUser,
  FaScrewdriverWrench,
  FaFolderOpen,
  FaFile,
  FaAddressBook,
} from "react-icons/fa6";

import Toggles from "./Toggles";
import Nav from "./Nav";
import "./Header.scss";

export const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { title: "home", icon: FaHouse },
    { title: "about", icon: FaUser },
    { title: "skills", icon: FaScrewdriverWrench },
    { title: "projects", icon: FaFolderOpen },
    { title: "résumé", icon: FaFile },
    { title: "contact", icon: FaAddressBook },
  ];

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.title.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= window.innerHeight / 3) {
            current = section.title.toLowerCase();
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (toggle && e.target instanceof Element && !e.target.closest(".nav")) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [toggle]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="navbar-brand">
          <div role="img" aria-label="D Heard logo" />
        </a>

        <Nav
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          toggle={toggle}
          setToggle={setToggle}
        />

        <Toggles
          toggle={toggle}
          setToggle={setToggle}
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </nav>
    </header>
  );
};
