//Packages ⬇️
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
//Context ⬇️
import { AppContext } from "../../context/AppContext";
//Components ⬇️
import LanguageSwitcher from "../LangSwitcher";
import ThemeButton from "../ThemeButton";
//Styles ⬇️
import "./styles.css";

const EASE = [0.22, 1, 0.36, 1];

const DropdownMenu = () => {
    const { t } = useTranslation();
    const { isDropdownMenuOpen, toggleDropdownMenu } = useContext(AppContext);

    const links = [
        { href: "#about-me", label: t("header.aboutMe") },
        { href: "#projects", label: t("header.projects") },
        { href: "#skills", label: t("header.skills") },
        { href: "#contact", label: t("header.contact") },
    ];

    return (
        <AnimatePresence>
            {isDropdownMenuOpen && (
                <motion.nav
                    className="dropdown-menu"
                    initial={{ clipPath: "circle(0% at 100% 0%)" }}
                    animate={{ clipPath: "circle(150% at 100% 0%)" }}
                    exit={{ clipPath: "circle(0% at 100% 0%)" }}
                    transition={{ duration: 0.8, ease: EASE }}
                >
                    <ul>
                        {links.map((link, index) => (
                            <li key={link.href} className="dropdown-menu-item">
                                <motion.a
                                    href={link.href}
                                    onClick={toggleDropdownMenu}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 + index * 0.07, ease: EASE }}
                                >
                                    {link.label}
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* On phones the language/theme toggles live here instead of the corner */}
                    <motion.div
                        className="dropdown-menu-toggles"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                    >
                        <LanguageSwitcher className="floating-control" />
                        <ThemeButton className="floating-control" />
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default DropdownMenu;
