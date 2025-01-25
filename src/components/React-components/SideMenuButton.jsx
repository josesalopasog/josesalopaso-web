import { MenuBarsIcon, CloseIcon } from "../../icons";
import { useState } from "react";

import "../../styles/HeaderButtons.css"

const SideMenuButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado de apertura/cierre
    };

    return (
        <>
            {/* Botón para abrir/cerrar el menú */}
            <button onClick={toggleMenu}>
                {menuOpen === false ? (
                    <MenuBarsIcon className="side-menu-button" />
                ) : (
                    <CloseIcon className="side-menu-button" />
                )}
            </button>


            {/* Menú lateral */}
            <div
                className={`side-menu fixed top-[75px] right-[20px] rounded-lg text-white transition-transform transform 
                    ${menuOpen ? "translate-x-0" : "translate-x-full hidden"
                    }
                `}
            >
                <div>
                    <div className="nav-mobile-container">
                        <ul>
                            <li onClick={toggleMenu}><a href="#about-me" data-lang="aboutMe">About Me</a></li>
                            <li onClick={toggleMenu}><a href="#projects" data-lang="projects">Projects</a></li>
                            <li onClick={toggleMenu}><a href="#skills" data-lang="skills">Skills</a></li>
                            <li onClick={toggleMenu}><a href="#education" data-lang="education">Education</a></li>
                            <li onClick={toggleMenu}><a href="#contact" data-lang="contact">Let's Chat</a></li>
                        </ul>
                    </div></div>
            </div>
        </>
    );
};

export default SideMenuButton;