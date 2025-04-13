import { useTranslation } from "react-i18next";
import { ArrowTopRightIcon, GithubIcon, GmailIcon, LinkedinIcon } from "../../assets/icons";
import GradientText from "../../components/GradientText";
import "./styles.css";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t("contact.title")}</h1>
            <div className="contact-container">
                <div className="contact-quote">
                    <GradientText>{t("contact.reach")}</GradientText>
                </div>
                <div className="contact-buttons-container">
                    <a
                        href="https://github.com/josesalopasog"
                        className="contact-button-container github-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="contact-icon" />
                        <p>GitHub</p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/josé-salopaso-484143187/"
                        className="contact-button-container linkedin-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon className="contact-icon" />
                        <p>LinkedIn</p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                </div>
                <div className="contact-quote">
                    <GradientText>{t("contact.mailMe")}</GradientText>
                </div>
                <div className="contact-buttons-container">
                    <a
                        href={`mailto:josesalopaso@gmail.com?subject=${encodeURIComponent(t("contact.subject"))}&body=${encodeURIComponent(t("contact.body"))}`}
                        className="contact-button-container gmail-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GmailIcon className="contact-icon" />
                        <p>josesalopaso@gmail.com</p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
