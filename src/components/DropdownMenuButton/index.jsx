//Packages ⬇️
import { useContext } from "react";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Assets ⬇️
import { ThreeBarsIcon, XMarkIcon } from "../../icons";
//Styles ⬇️
import "./styles.css";

const DropdownMenuButton = ({ className = "" }) => {
    const { 
        isDropdownMenuOpen, 
        toggleDropdownMenu 
    } = useContext(AppContext);
    
    return (
        <button 
            id="three-bars-btn"
            className={`three-bars-btn ${className}`}
            onClick={toggleDropdownMenu} 
        >
            {isDropdownMenuOpen ? (
                <XMarkIcon className="three-bars-icon text-black dark:text-white" />
            ) : (
                <ThreeBarsIcon className="three-bars-icon text-black dark:text-white" />
            )}
        </button>
    );
};

export default DropdownMenuButton;