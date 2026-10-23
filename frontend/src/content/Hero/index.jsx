//Packages ⬇️
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
//Assets ⬇️
import heroSky from "../../assets/images/hero-sky.webp";
import heroCharacter from "../../assets/images/hero-character.webp";
import { GithubIcon, InstagramIcon, MailIcon } from "../../icons";
//Styles ⬇️
import "./styles.css";

const EASE = [0.22, 1, 0.36, 1];

const NAME_LINES = ["JOSÉ", "SALOPASO"];

const SOCIAL_LINKS = [
    { href: "https://www.instagram.com/josesalopaso/", label: "Instagram", Icon: InstagramIcon },
    { href: "mailto:josesalopaso@gmail.com", label: "Email", Icon: MailIcon },
    { href: "https://github.com/josesalopasog", label: "GitHub", Icon: GithubIcon },
];

const Hero = () => {
    const { t } = useTranslation();
    const heroRef = useRef(null);

    // Scroll progress across the (taller than the screen) hero drives the parallax ⬇️
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
    const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
    const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
    const characterScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
    const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const overlay = useTransform(scrollYProgress, [0.55, 1], [0, 1]);

    const navItems = [
        { href: "#about-me", label: t("header.aboutMe") },
        { href: "#projects", label: t("header.projects") },
        { href: "#skills", label: t("header.skills") },
        { href: "#contact", label: t("header.contact") },
    ];

    return (
        <section ref={heroRef} className="hero" id="home">
            <div className="hero-sticky">
                <motion.div className="hero-sky" style={{ scale: skyScale, y: skyY }}>
                    <motion.img
                        src={heroSky}
                        alt=""
                        fetchPriority="high"
                        initial={{ scale: 1.25, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2.2, ease: EASE }}
                    />
                </motion.div>

                <motion.h1
                    className="hero-name"
                    style={{ opacity: fadeOut }}
                    aria-label="José Salopaso"
                >
                    {NAME_LINES.map((line, lineIndex) => (
                        <span key={line} className="hero-name-line" aria-hidden="true">
                            {line.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={letterIndex}
                                    className="hero-name-letter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1.1,
                                        ease: EASE,
                                        delay: 0.5 + lineIndex * 0.25 + letterIndex * 0.045,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.h1>

                <div className="hero-band">
                    <motion.nav
                        className="hero-nav"
                        style={{ opacity: fadeOut }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
                    >
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="hero-nav-link">
                                {item.label}
                            </a>
                        ))}
                    </motion.nav>

                    <motion.div
                        className="hero-cta-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 1.45, ease: EASE }}
                    >
                        <p className="hero-tagline">{t("hero.tagline")}</p>
                        <div className="hero-cta-row">
                            <a href="#contact" className="pill-button hero-cta">
                                {t("hero.workWithMe")}
                            </a>
                            <ul className="hero-socials">
                                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                                    <li key={label}>
                                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                            <Icon className="hero-social-icon" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-character"
                    style={{ scale: characterScale }}
                >
                    <motion.img
                        src={heroCharacter}
                        alt="Illustration of Jose Salopaso leaning on a railing at sunset"
                        initial={{ opacity: 0, y: "6%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
                    />
                </motion.div>

                <motion.div className="hero-overlay" style={{ opacity: overlay }} />
            </div>
        </section>
    );
};

export default Hero;
