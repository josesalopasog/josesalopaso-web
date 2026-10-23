//Packages ⬇️
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
//Components ⬇️
import LanguageSwitcher from "../LangSwitcher";
import ThemeButton from "../ThemeButton";
//Assets ⬇️
import { ArrowUpIcon } from "../../icons";
//Styles ⬇️
import "./styles.css";

const EASE = [0.22, 1, 0.36, 1];

// Bottom-right corner: language + theme toggles (desktop only; phones get them in the menu)
// and a back-to-top button that shows up once the hero is behind you
const FloatingControls = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const [isPastHero, setIsPastHero] = useState(false);

    useMotionValueEvent(scrollY, "change", (value) => {
        setIsPastHero(value > window.innerHeight * 0.9);
    });

    return (
        <motion.div
            className="floating-controls"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
        >
            <LanguageSwitcher className="floating-control floating-control-toggle" />
            <ThemeButton className="floating-control floating-control-toggle" />
            <AnimatePresence>
                {isPastHero && (
                    // A plain anchor, so the smooth-scroll handler (Lenis) animates the trip up
                    <motion.a
                        href="#home"
                        className="floating-control floating-control-top"
                        aria-label={t("controls.top")}
                        title={t("controls.top")}
                        initial={{ opacity: 0, y: 16, scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.6 }}
                        transition={{ duration: 0.5, ease: EASE }}
                    >
                        <ArrowUpIcon className="floating-control-top-icon" />
                    </motion.a>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FloatingControls;
