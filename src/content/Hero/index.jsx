import { useTranslation } from 'react-i18next';
import iconLogo from "../../assets/images/my-icon.svg";
import GradientText from "../../components/GradientText";

import "./styles.css";

const Hero = () => {
    const { t } = useTranslation(); 
    return (
        <>
            <div className="hero-container">
            <GradientText className="hero-quote">¡ {t('welcome')} !</GradientText>
                <img src={iconLogo} alt="icon-logo" className="icon-logo" />
            </div>
        </>
    );
};

export default Hero;
