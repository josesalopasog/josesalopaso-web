//Packages ⬇️
import { useContext } from "react";
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

const Header = () => {
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
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Let's Chat</a></li>
                </ul>
            </nav>
            <div className="header-third-column">
                
                <ThemeButton className="header-theme-button" />
                <DropdownMenuButton
                    isOpen={ isDropdownMenuOpen }
                    onClick={toggleDropdownMenu}
                    className="header-menu-button"
                />
            </div>
        </header>
    );
};

export default Header;