//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Styles ⬇️
import "./styles.css";

const DropdownMenu = () => {
    const { t } = useTranslation();
    const { isDropdownMenuOpen, toggleDropdownMenu } = useContext(AppContext);
  
    return (
      <nav className={`dropdown-menu ${isDropdownMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about-me" onClick={toggleDropdownMenu}>
              {t("header.aboutMe")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleDropdownMenu}>
              {t("header.projects")}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleDropdownMenu}>
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleDropdownMenu}>
              {t("header.contact")}
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default DropdownMenu;