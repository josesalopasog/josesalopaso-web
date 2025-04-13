import { AcademicCapIcon, BriefCaseIcon, MapPinIcon } from "../../assets/icons";
import iconLogo from "../../assets/images/my-icon.svg";
import GradientText from "../../components/GradientText";

import "./styles.css";

const Hero = () => {
    return (
        <>
            <div className="hero-container">
            <GradientText className="hero-quote">¡Hi!</GradientText>
                <img src={iconLogo} alt="icon-logo" className="icon-logo" />
            </div>
        </>
    );
};

export default Hero;
