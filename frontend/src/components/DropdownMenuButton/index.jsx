//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { ThreeBarsIcon, XMarkIcon } from "../../icons";
//Styles ⬇️
import "./styles.css";

const DropdownMenuButton = ({ className = "" }) => {
    const { t } = useTranslation();
    const {
        isDropdownMenuOpen,
        toggleDropdownMenu
    } = useContext(AppContext);

    return (
        <button
            id="three-bars-btn"
            className={`three-bars-btn ${className}`}
            onClick={toggleDropdownMenu}
            aria-label={t("controls.menu")}
            aria-expanded={isDropdownMenuOpen}
        >
            {isDropdownMenuOpen ? (
                <XMarkIcon className="three-bars-icon" />
            ) : (
                <ThreeBarsIcon className="three-bars-icon" />
            )}
        </button>
    );
};

export default DropdownMenuButton;
