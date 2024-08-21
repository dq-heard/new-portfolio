import { NavType, IconType } from "./types";

interface NavItemProps extends NavType {
  section: IconType;
}

export const NavItem: React.FC<NavItemProps> = ({
  section,
  onClick,
  showIcons = false,
  showEmptyDiv = false,
  activeSection,
  setActiveSection,
}) => {
  const IconComponent = section.icon;

  const handleItemClick = () => {
    if (onClick) {
      onClick(); // Call onClick prop if provided
    }
    setActiveSection(section.title.toLowerCase()); // Update active section on click
  };

  return (
    <li key={`link-${section.title}`} className="nav-item flex">
      {showEmptyDiv && <div></div>}
      {showIcons && <IconComponent />}
      <a
        href={`#${section.title}`}
        className={`nav-link ${
          activeSection === section.title.toLowerCase() ? "active-link" : ""
        }`}
        onClick={handleItemClick}
      >
        {section.title}
      </a>
    </li>
  );
};

interface NavItemsProps extends NavType {
  sections: IconType[];
}

export const NavItems: React.FC<NavItemsProps> = ({
  sections,
  onClick,
  showIcons = true,
  showEmptyDiv = false,
  activeSection,
  setActiveSection,
}) => {
  return (
    <ul className="nav-list">
      {sections.map((section) => (
        <NavItem
          key={`link-${section.title}`}
          section={section}
          onClick={onClick}
          showIcons={showIcons}
          showEmptyDiv={showEmptyDiv}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ))}
    </ul>
  );
};
