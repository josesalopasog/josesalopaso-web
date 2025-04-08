//Packages ⬇️
import PropTypes from "prop-types";
//Assets ⬇️
import { ThreeBarsIcon, XMarkIcon } from "../../assets/icons";
//Styles ⬇️
import "./styles.css";

const DropdownMenuButton = ({ isOpen, onClick, className = "" }) => {
    return (
        <button 
            onClick={onClick} 
            className={`three-bars-icon ${className} transition-transform duration-300 hover:scale-110`}>
            {isOpen ? (
                <XMarkIcon className="text-black dark:text-white" />
            ) : (
                <ThreeBarsIcon className="text-black dark:text-white" />
            )}
        </button>
    );
};

DropdownMenuButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default DropdownMenuButton;