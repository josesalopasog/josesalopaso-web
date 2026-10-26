//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { ColombiaFlag, UsaFlag } from "../../icons";
//Styles ⬇️
import "./styles.css";

const LanguageSwitcher = ({ className = "" }) => {
    const { t } = useTranslation();
    const {
        language,
        toggleLanguage
    } = useContext(AppContext);

    return (
        <button
            id="lang-toggle-btn"
            className={`lang-toggle-btn ${className}`}
            onClick={toggleLanguage}
            aria-label={t("controls.language")}
        >
            {language === "en" ? (
                <UsaFlag className="lang-icon" />
            ) : (
                <ColombiaFlag className="lang-icon" />
            )}
            {/* On hover the flag fades out and the current language code shows instead */}
            <span className="lang-code" aria-hidden="true">{language === "en" ? "EN" : "ES"}</span>
        </button>
    );
};

export default LanguageSwitcher;
