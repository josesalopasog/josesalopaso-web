import { useTranslation } from 'react-i18next';
import GradientText from '../../components/GradientText'; 
import "./styles.css";

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('aboutMe.title')}</h1>
            <div className="about-me-container">
                <p>{t('aboutMe.description')}</p>
            </div>
            <div className="about-me-quote">
                <GradientText>
                    <span >{t('aboutMe.quote')}</span>
                    <span>
                        <a href="#contact">👇🏻</a>
                    </span>
                </GradientText>
            </div>
        </>
    );
};

export default AboutMe;