import { HeartIcon } from "../../assets/icons";

import "./styles.css";

const Footer = () => {
    return (
        <footer>
            <p className="footer-text">
                <span >Made with</span>
                <span>
                    <HeartIcon className="hearth-icon dark:fill-[#00D8FF] fill-[#BD34FE] " />
                </span>
                <span >by me!</span>
            </p>
        </footer>
    );
};

export default Footer; 