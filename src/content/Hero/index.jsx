import { AcademicCapIcon, BriefCaseIcon, MapPinIcon } from "../../assets/icons";
import iconLogo from "../../assets/images/my-icon.svg";

import "./styles.css";

const Hero = () => {
    return (
        <>
            <div className="icon-container">
                <img src={iconLogo} alt="icon-logo" className="icon-logo" />
            </div>
        </>
    );
};

export default Hero;
