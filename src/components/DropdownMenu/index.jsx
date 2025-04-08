//Packages ⬇️
import { useContext } from "react";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Styles ⬇️
import "./styles.css";

const DropdownMenu = () => {
    const { isDropdownMenuOpen, toggleDropdownMenu } = useContext(AppContext);
    return (
        <>
            <nav className={`dropdown-menu ${isDropdownMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#about-me" onClick={toggleDropdownMenu}>About Me</a></li>
                    <li><a href="#projects" onClick={toggleDropdownMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={toggleDropdownMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={toggleDropdownMenu}>Let's Chat</a></li>
                </ul>
            </nav>
        </>
    );
};

export default DropdownMenu;