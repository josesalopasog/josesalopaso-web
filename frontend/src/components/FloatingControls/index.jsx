//Packages ⬇️
import { useRef, useState } from "react";
import PropTypes from "prop-types";
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

// The +/− icon: two bars; the vertical one folds away when the toggles are open (+ → −)
const PlusMinusIcon = ({ isOpen }) => (
    <span className={`floating-control-more-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
        <span />
        <span />
    </span>
);

PlusMinusIcon.propTypes = { isOpen: PropTypes.bool.isRequired };

// Fold-out toggles: the row grows from zero width (so nothing jumps) and the buttons pop in one by one
const TOGGLES_ROW = {
    closed: { width: 0, marginLeft: -10, transition: { duration: 0.45, ease: EASE, when: "afterChildren" } },
    open: { width: "auto", marginLeft: 0, transition: { duration: 0.45, ease: EASE, staggerChildren: 0.06 } },
};
const TOGGLE = {
    closed: { opacity: 0, scale: 0.6, transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

// Bottom-right corner: a +/− button that shows or hides the language + theme toggles (they open
// to its right, so the button slides left next to the flag), and a back-to-top button that shows
// up once the hero is behind you. The arrow takes the right edge and grows in from zero width, so
// the rest slides over instead of jumping.
const FloatingControls = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const [isPastHero, setIsPastHero] = useState(false);
    const isPastHeroRef = useRef(false);
    const [areTogglesOpen, setAreTogglesOpen] = useState(false);

    // Runs on every scroll event: only touch React state when the flag actually flips
    useMotionValueEvent(scrollY, "change", (value) => {
        const next = value > window.innerHeight * 0.9;
        if (next !== isPastHeroRef.current) {
            isPastHeroRef.current = next;
            setIsPastHero(next);
        }
    });

    return (
        <motion.div
            className="floating-controls"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
        >
            <button
                type="button"
                className="floating-control floating-control-more"
                onClick={() => setAreTogglesOpen((open) => !open)}
                aria-expanded={areTogglesOpen}
                aria-controls="floating-toggles"
                aria-label={t(areTogglesOpen ? "controls.less" : "controls.more")}
                title={t(areTogglesOpen ? "controls.less" : "controls.more")}
            >
                <PlusMinusIcon isOpen={areTogglesOpen} />
            </button>

            <AnimatePresence initial={false}>
                {areTogglesOpen && (
                    <motion.div
                        key="toggles"
                        id="floating-toggles"
                        className="floating-controls-toggles"
                        variants={TOGGLES_ROW}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <motion.div variants={TOGGLE}>
                            <LanguageSwitcher className="floating-control floating-control-toggle" />
                        </motion.div>
                        <motion.div variants={TOGGLE}>
                            <ThemeButton className="floating-control floating-control-toggle" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isPastHero && (
                    <motion.div
                        key="top"
                        className="floating-control-top-slot"
                        initial={{ width: 0, marginLeft: -10 }}
                        animate={{ width: "auto", marginLeft: 0 }}
                        exit={{ width: 0, marginLeft: -10 }}
                        transition={{ duration: 0.5, ease: EASE }}
                    >
                        {/* A plain anchor, so the smooth-scroll handler (Lenis) animates the trip up */}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FloatingControls;
