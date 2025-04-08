import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AppContext } from "../AppContext";

export const AppProvider = ({ children }) => {
    //States ⬇️
    const [theme, setTheme] = useState("dark");
    const [language, setLanguage] = useState(false);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    //Effects ⬇️
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme]);

    //Functions ⬇️
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    const toggleDropdownMenu = () => {
        setIsDropdownMenuOpen(prev => !prev);
    };

    return (
        <AppContext.Provider value={{
            theme, setTheme,
            language, setLanguage,
            isDropdownMenuOpen, setIsDropdownMenuOpen,
            toggleTheme,
            toggleDropdownMenu,
        }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
