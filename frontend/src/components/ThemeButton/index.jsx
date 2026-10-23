//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { MoonIcon, SunIcon } from "../../icons";
//Styles ⬇️
import "./styles.css";

const ThemeButton = ({ className = "" }) => {
    const { t } = useTranslation();
    const {
        theme, //Bring the global state for the theme
        toggleTheme,  //Bring the function to toggle the global state for the theme
    } = useContext(AppContext);

    return (
        <button
            id="theme-toggle"
            className={`theme-toggle-btn ${className}`}
            onClick={toggleTheme} //Toggle the global state on click
            aria-label={t("controls.theme")}
        >
            {theme === "dark" ? ( //Show a Moon while dark, a Sun while light
                <MoonIcon className="theme-toggle-icon" />
            ) : (
                <SunIcon className="theme-toggle-icon" />
            )}
        </button>
    );
};

export default ThemeButton;
