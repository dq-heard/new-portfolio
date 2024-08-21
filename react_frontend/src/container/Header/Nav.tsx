import React from "react";
import { NavItems } from "../../constants/utils";
import { NavType, IconType } from "../../constants/types";

interface NavProps extends NavType {
  sections: IconType[];
}

const Nav: React.FC<NavProps> = ({
  toggle,
  setToggle,
  sections,
  activeSection,
  setActiveSection,
}) => {
  return (
    <div className="nav-menu" id="nav-menu">
      <NavItems
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggle={toggle}
        setToggle={setToggle}
        showIcons={false}
        showEmptyDiv={true}
      />
    </div>
  );
};

export default Nav;
