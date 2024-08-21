export interface IconType {
  title: string;
  icon: React.ElementType;
  classname?: string;
  url?: string;
}

export interface NavType {
  onClick?: () => void;
  showIcons?: boolean;
  showEmptyDiv?: boolean;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}
