import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import i18n from "i18next";

export const AppProvider = ({ children }) => {
    // States ⬇️
    const [theme, setTheme] = useState("dark");
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    // Functions ⬇️
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    const toggleDropdownMenu = () => {
        setIsDropdownMenuOpen(prev => !prev);
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en'; 
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage); 
        localStorage.setItem('language', newLanguage); 
    };

    // Effects ⬇️
    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        if (i18n && language) {
            i18n.changeLanguage(language); 
        }
    }, [language]);

    return (
        <AppContext.Provider value={{
            theme, setTheme,
            language, setLanguage,
            isDropdownMenuOpen, setIsDropdownMenuOpen,
            toggleTheme,
            toggleDropdownMenu,
            toggleLanguage
        }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
