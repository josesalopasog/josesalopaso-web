import { useRef, useState, useSyncExternalStore } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import heroSky from "../../assets/images/hero-sky.webp";
import aboutArcher from "../../assets/images/about-archer.webp";
import "./styles.css";

// Same breakpoint as the phone layout in styles.css
const PHONE_QUERY = "(max-width: 900px)";

const useIsPhone = () =>
    useSyncExternalStore(
        (onChange) => {
            const query = window.matchMedia(PHONE_QUERY);
            query.addEventListener("change", onChange);
            return () => query.removeEventListener("change", onChange);
        },
        () => window.matchMedia(PHONE_QUERY).matches
    );

// Text only fades (no movement): in over [start, end], then out just before the scene lets go
const useTextFade = (progress, start, end) => ({
    opacity: useTransform(progress, [start, end, 0.86, 0.98], [0, 1, 1, 0]),
});

// The section overlaps the end of the hero: when the hero has faded to black, this pinned scene
// fades in from the dark in the same place (like the VI page), then scrolls away normally.
// Desktop: backdrop, archer (on the left) and text (on the right) fade in one after another.
// Phones: 1) the archer appears as tall as the screen, 2) it shrinks a touch and darkens,
// 3) the text comes in on top of it.
const AboutMe = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const isPhone = useIsPhone();
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const [isVisible, setIsVisible] = useState(false);
    const isVisibleRef = useRef(false);

    // Desktop: the archer fades in from the dark, a touch larger
    const desktopBackdrop = {
        opacity: useTransform(scrollYProgress, [0, 0.35], [0, 1]),
        scale: useTransform(scrollYProgress, [0, 0.35], [1.06, 1]),
    };
    const desktopArcher = {
        opacity: useTransform(scrollYProgress, [0.05, 0.4], [0, 1]),
        scale: useTransform(scrollYProgress, [0.05, 0.4], [1.06, 1]),
    };
    const desktopTitle = useTextFade(scrollYProgress, 0.12, 0.42);
    const desktopStory = useTextFade(scrollYProgress, 0.18, 0.48);
    const desktopExtras = useTextFade(scrollYProgress, 0.24, 0.54);

    // Phones: the dark layer (instead of a CSS filter, which would repaint the image every frame)
    // covers the archer while it shrinks; then the text
    const phoneBackdrop = { opacity: useTransform(scrollYProgress, [0, 0.25], [0, 1]) };
    const phoneArcher = {
        opacity: useTransform(scrollYProgress, [0.04, 0.28], [0, 1]),
        scale: useTransform(scrollYProgress, [0.34, 0.52], [1, 0.86]),
    };
    const phoneDim = { opacity: useTransform(scrollYProgress, [0.34, 0.52], [0, 1]) };
    const phoneTitle = useTextFade(scrollYProgress, 0.5, 0.6);
    const phoneStory = useTextFade(scrollYProgress, 0.54, 0.66);
    const phoneExtras = useTextFade(scrollYProgress, 0.58, 0.7);

    const backdrop = isPhone ? phoneBackdrop : desktopBackdrop;
    const archer = isPhone ? phoneArcher : desktopArcher;
    const title = isPhone ? phoneTitle : desktopTitle;
    const story = isPhone ? phoneStory : desktopStory;
    const extras = isPhone ? phoneExtras : desktopExtras;

    // While still invisible it must not catch clicks meant for the hero underneath
    // (runs on every scroll event, so React state is only touched when it flips)
    useMotionValueEvent(scrollYProgress, "change", (value) => {
        const next = value > 0.15;
        if (next !== isVisibleRef.current) {
            isVisibleRef.current = next;
            setIsVisible(next);
        }
    });

    const facts = [
        t('profile.availability'),
        t('profile.role'),
        t('profile.university'),
        t('profile.location'),
    ];

    return (
        <section ref={sectionRef} className={`about ${isVisible ? "is-visible" : ""}`}>
            {/* Nav links land here, where the scene has already faded in (the section top is still dark) */}
            <span id="about-me" className="about-anchor" aria-hidden="true" />
            <div className="about-sticky">
                <motion.div className="about-backdrop" style={backdrop}>
                    <img decoding="async" src={heroSky} alt="" loading="lazy" className="about-bg" />
                    <div className="about-shade" />
                </motion.div>

                {/* Bottom-anchored so the legs meet the edge of the section */}
                <motion.img decoding="async"
                    src={aboutArcher}
                    alt=""
                    loading="lazy"
                    className="about-archer"
                    style={archer}
                />

                {/* Phones only (hidden on desktop in styles.css) */}
                <motion.div className="about-dim" style={phoneDim} />

                <div className="about-copy">
                    <motion.h2 className="about-title" style={title}>
                        {t('aboutMe.title')}
                    </motion.h2>
                    <motion.p className="about-story" style={story}>
                        {t('aboutMe.description')}
                    </motion.p>

                    <motion.div style={extras}>
                        <ul className="about-facts">
                            {facts.map((fact) => (
                                <li key={fact} className="about-fact">{fact}</li>
                            ))}
                        </ul>
                        <a href="#contact" className="about-cta">{t('aboutMe.quote')} →</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
