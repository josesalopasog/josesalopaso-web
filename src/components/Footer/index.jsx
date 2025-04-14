import { useTranslation } from "react-i18next";
import { HeartIcon } from "../../icons";

import "./styles.css";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <p className="footer-text">
                <span>{t("footer.madeWith")}</span>
                <span>
                    <HeartIcon className="hearth-icon dark:fill-[#00D8FF] fill-[#BD34FE]" />
                </span>
                <span>{t("footer.byMe")}</span>
            </p>
        </footer>
    );
};

export default Footer;