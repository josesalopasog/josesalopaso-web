//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
//Components ⬇️
import GradientText from "../GradientText";
import DropdownMenuButton from "../DropdownMenuButton";
import ThemeButton from "../ThemeButton";
import ThemeLogo from "../ThemeLogo";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import logo_dark from "../../assets/svg/cyberjs-logo.svg";
import logo_light from "../../assets/svg/cyberjs-dark-logo.svg"
//Styles ⬇️
import "./styles.css";
import LanguageSwitcher from "../LangSwitcher";

const Header = () => {
    const { t } = useTranslation();
    const { isDropdownMenuOpen, toggleDropdownMenu } = useContext(AppContext);
  
    return (
      <header>
        <div className="header-first-column">
          <ThemeLogo
            srcDark={logo_dark}
            srcLight={logo_light}
            className="header-logo"
          />
          <GradientText className="header-text">
            <span>Jose</span>
            <span>Salopaso</span>
          </GradientText>
        </div>
        <nav className="header-second-column">
          <ul className="header-ul">
            <li><a href="#about-me">{t("header.aboutMe")}</a></li>
            <li><a href="#projects">{t("header.projects")}</a></li>
            <li><a href="#skills">{t("header.skills")}</a></li>
            <li><a href="#contact">{t("header.contact")}</a></li>
          </ul>
        </nav>
        <div className="header-third-column">
          <LanguageSwitcher />
          <ThemeButton className="header-theme-button" />
          <DropdownMenuButton
            isOpen={isDropdownMenuOpen}
            onClick={toggleDropdownMenu}
            className="header-menu-button"
          />
        </div>
      </header>
    );
  };
  
  export default Header;