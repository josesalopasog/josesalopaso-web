//Packages ⬇️
import { useContext } from "react";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { MoonIcon, SunIcon } from "../../assets/icons";
//Styles ⬇️
import "./styles.css";

const ThemeButton = ({ className = "" }) => {
    const { 
        theme, //Bring the global state for the theme
        toggleTheme,  //Bring the function to toggle the global state for the theme
    } = useContext(AppContext);

    return (
        <button
            id="theme-toggle"
            className={`theme-toggle-btn ${className}`}
            onClick={toggleTheme} //Toggle the global state on click 
        >
            {theme === "dark" ? ( //Set the theme button to a Sun if it is true if it is false set the icon to a Moon
                <SunIcon className="theme-toggle-icon  text-[#00e1ff]  hover:text-[#BD34FE]" />
            ) : (
                <MoonIcon className="theme-toggle-icon  text-[#BD34FE]  hover:text-[#00e1ff]" />
            )}
        </button>
    );
};

export default ThemeButton;