import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AppContext } from "../AppContext";

export const AppProvider = ({ children }) => {
    //Ui States ⬇️
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

    return (
        <AppContext.Provider value={{
            theme, setTheme,
            language, setLanguage,
            isDropdownMenuOpen, setIsDropdownMenuOpen,
            toggleTheme,
        }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
