import { ArrowTopRightIcon, GithubIcon, GmailIcon, LinkedinIcon } from "../../assets/icons";
import "./styles.css";

const Contact = () => {
    return (
        <>
            <h1>Let's Chat</h1>
            <div className="contact-container">
                <p>If you want to work with me, reach me at:</p>
                <div className="contact-buttons-container">
                    <a href="https://github.com/josesalopasog" className="contact-button-container github-button" target='_blank'>
                        <GithubIcon className="contact-icon" />
                        <p>GitHub</p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/josé-salopaso-484143187/" className="contact-button-container linkedin-button" target='_blank'>
                        <LinkedinIcon className="contact-icon" />
                        <p>LinkedIn</p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                </div>
                <p>Or mail me:</p>
                <div className="contact-buttons-container">
                    <a
                        href="mailto:josesalopaso@gmail.com?subject=Let's%20talk%20about%20work&body=Mensaje%20predefinido"
                        className="contact-button-container gmail-button"
                        target='_blank'
                    >
                        <GmailIcon className="contact-icon" />
                        <p>josesalopaso@gmail.com </p>
                        <ArrowTopRightIcon className="contact-icon" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
