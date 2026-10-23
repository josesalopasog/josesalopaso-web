import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import heroSky from "../../assets/images/hero-sky.webp";
import aboutArcher from "../../assets/images/about-archer.webp";
import "./styles.css";

// Fades a piece of the scene in from the dark (and a touch larger) over a slice of the scroll
const useFadeIn = (progress, start, end) => ({
    opacity: useTransform(progress, [start, end], [0, 1]),
    scale: useTransform(progress, [start, end], [1.06, 1]),
});

// Text only fades (no movement): in over [start, end], then out just before the scene lets go
const useTextFade = (progress, start, end) => ({
    opacity: useTransform(progress, [start, end, 0.86, 0.98], [0, 1, 1, 0]),
});

// The section overlaps the end of the hero: when the hero has faded to black, this pinned scene
// fades in from the dark in the same place (like the VI page), then scrolls away normally.
const AboutMe = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const [isVisible, setIsVisible] = useState(false);

    const backdrop = useFadeIn(scrollYProgress, 0, 0.35);
    const archer = useFadeIn(scrollYProgress, 0.05, 0.4);
    const title = useTextFade(scrollYProgress, 0.12, 0.42);
    const story = useTextFade(scrollYProgress, 0.18, 0.48);
    const extras = useTextFade(scrollYProgress, 0.24, 0.54);

    // While still invisible it must not catch clicks meant for the hero underneath
    useMotionValueEvent(scrollYProgress, "change", (value) => setIsVisible(value > 0.15));

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
                    <img src={heroSky} alt="" loading="lazy" className="about-bg" />
                    <div className="about-shade" />
                </motion.div>

                {/* Bottom-anchored so the legs meet the edge of the section */}
                <motion.img
                    src={aboutArcher}
                    alt=""
                    loading="lazy"
                    className="about-archer"
                    style={archer}
                />

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
