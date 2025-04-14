//Packages ⬇️
import { useContext } from "react";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { ColombiaFlag, UsaFlag } from "../../icons";
//Styles ⬇️
import "./styles.css";

const LanguageSwitcher = ({ className = "" }) => {
    const {
        language,
        toggleLanguage 
    } = useContext(AppContext);

    return (
        <button
            id="lang-toggle-btn"
            className={`lang-toggle-btn ${className}`}
            onClick={toggleLanguage}
        >
            {language === "en" ? (
                <UsaFlag className="lang-icon" />
            ) : (
                <ColombiaFlag className="lang-icon" />
            )}
        </button>
    );
};

export default LanguageSwitcher;