import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./styles.css";

const ThemeLogo = ({ srcDark, srcLight, className = "" }) => {
    const { theme } = useContext(AppContext); //Bring the global state for the theme
    return (
        <>
            <img
                className={`theme-logo ${className}`}
                src={theme === "dark" ? srcDark : srcLight} //If is true set the logo to the dark one if is false to the light one
                alt="Logo"
            />
        </>
    );
};

ThemeLogo.propTypes = {
    srcDark: PropTypes.string.isRequired,
    srcLight: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ThemeLogo;