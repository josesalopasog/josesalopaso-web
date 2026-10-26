import { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "../../components/Reveal";
import "./styles.css";
import heroSky from "../../assets/images/hero-sky.webp";
import projectsLaptop from "../../assets/images/projects-laptop.webp";
import iter412Img from "../../assets/images/iter412-preview.webp";
import decimetrixImg from "../../assets/images/cyberjs-assets-preview.webp";
import cyberjsImg from "../../assets/images/cyberjs-ui-preview.webp";
import { GithubIcon } from "../../icons";

const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
const clamp01 = (t) => Math.min(1, Math.max(0, t));

// Same breakpoint as the phone layout in styles.css
const PHONE_QUERY = "(max-width: 900px)";

// Center of the laptop's screen inside projects-laptop.webp (fractions of the image): the cards come out of here
const SCREEN_X = 0.49;
const SCREEN_Y = 0.19;

// Scroll window of the "out of the laptop" beat; on desktop each card starts a little after the previous one
const EMERGE_START = 0.58;
const EMERGE_LENGTH = 0.24;
const EMERGE_STAGGER = 0.05;

// A card (or, on phones, the whole row) starts tiny on the laptop screen and grows while it flies to its spot.
// `getOffset` says how far its center is from the screen center when it's in place; when `isActive`
// is false the element just stays in place, fully visible (the style is always applied, so nothing
// is left behind when switching between the phone and desktop versions).
const useEmerge = (progress, start, isActive, getOffset) => {
    const local = (value) => (isActive() ? clamp01((value - start) / EMERGE_LENGTH) : 1);
    const eased = (value) => easeOutQuint(local(value));
    return {
        x: useTransform(progress, (value) => (getOffset()?.x ?? 0) * (1 - eased(value))),
        y: useTransform(progress, (value) => (getOffset()?.y ?? 0) * (1 - eased(value))),
        scale: useTransform(progress, (value) => 0.12 + 0.88 * eased(value)),
        opacity: useTransform(progress, (value) => clamp01(local(value) * 4)),
    };
};

// Desktop: each card comes out on its own (on phones it stays put and the row moves instead)
const EmergingCard = ({ index, progress, geometry, children }) => {
    const style = useEmerge(
        progress,
        EMERGE_START + index * EMERGE_STAGGER,
        () => !geometry.current.isPhone,
        () => geometry.current.cards[index]
    );

    return (
        <motion.div className="project-card-slot" style={style}>
            {children}
        </motion.div>
    );
};

// Poster-style card: clicking anywhere on it opens the live site
const ProjectCard = ({ project }) => {
    const { t } = useTranslation();

    return (
        <article className="project-card">
            <a
                href={project.webURL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                aria-label={`${t("projects.watch")}: ${project.title}`}
            >
                <img decoding="async" src={project.image} alt="" loading="lazy" className="project-card-image" />
                <span className="project-card-shade" />
                <span className="project-card-copy">
                    <span className="project-card-tag">{project.tagProject}</span>
                    <span className="project-card-title">{project.title}</span>
                    <span className="project-card-subtitle">{project.subtitle}</span>
                </span>
            </a>

            {project.repURL && (
                <a
                    href={project.repURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-code"
                    aria-label={`${t("projects.code")}: ${project.title}`}
                    title={t("projects.code")}
                >
                    <GithubIcon />
                </a>
            )}
        </article>
    );
};

const Projects = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const [activeCard, setActiveCard] = useState(0);
    // Progress across the pinned span: 0 when the frame locks, 1 when it lets go
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    // Three beats: 1) the laptop rises in the center, 2) it slides to the left, 3) the cards come out of its screen
    const laptopY = useTransform(scrollYProgress, [0, 0.28], ["75%", "0%"], { ease: easeOutQuint });
    const laptopScale = useTransform(scrollYProgress, [0.32, 0.55], [1.12, 1]);
    const laptopToCenter = useTransform(scrollYProgress, [0.32, 0.55], [1, 0], { ease: easeOutQuint });
    // 3) The cards come out of the laptop screen. Offsets are measured from the layout (no transforms
    //    involved): by then the laptop has finished moving and sits in its final spot.
    const laptopRef = useRef(null);
    const geometry = useRef(null);
    if (geometry.current === null) {
        geometry.current = { isPhone: window.matchMedia(PHONE_QUERY).matches, cards: [], row: { x: 0, y: 0 } };
    }

    useLayoutEffect(() => {
        const measure = () => {
            const laptop = laptopRef.current;
            const row = cardsRef.current;
            if (!laptop || !row) return;
            const phone = window.matchMedia(PHONE_QUERY).matches;
            // On phones the laptop is centered with a CSS translate, which offsetLeft doesn't include
            const laptopLeft = phone ? (window.innerWidth - laptop.offsetWidth) / 2 : laptop.offsetLeft;
            const screen = {
                x: laptopLeft + laptop.offsetWidth * SCREEN_X,
                y: laptop.offsetTop + laptop.offsetHeight * SCREEN_Y,
            };
            const offsetFrom = (left, top, width, height) => ({
                x: screen.x - (left + width / 2),
                y: screen.y - (top + height / 2),
            });
            geometry.current = {
                isPhone: phone,
                row: offsetFrom(row.offsetLeft, row.offsetTop, row.offsetWidth, row.offsetHeight),
                cards: [...row.children].map((slot) =>
                    offsetFrom(row.offsetLeft + slot.offsetLeft, row.offsetTop + slot.offsetTop, slot.offsetWidth, slot.offsetHeight)
                ),
            };
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Phones: the cards live in a swipe row (it would clip them), so the whole row comes out instead
    const rowEmerge = useEmerge(
        scrollYProgress,
        EMERGE_START,
        () => geometry.current.isPhone,
        () => geometry.current.row
    );
    const cardsOpacity = useTransform(scrollYProgress, [EMERGE_START, EMERGE_START + 0.1], [0, 1]);

    // Phones: track which card is snapped to the center, and let the dots jump to one
    const cardStep = () => {
        const row = cardsRef.current;
        return row.firstElementChild.offsetWidth + parseFloat(getComputedStyle(row).columnGap);
    };

    const handleCardsScroll = () => {
        setActiveCard(Math.round(cardsRef.current.scrollLeft / cardStep()));
    };

    const goToCard = (index) => {
        cardsRef.current.scrollTo({ left: index * cardStep(), behavior: "smooth" });
    };

    const projects = [
        {
            image: iter412Img,
            title: t("projects.iter412.title"),
            subtitle: t("projects.iter412.subtitle"),
            tagProject: t("projects.iter412.tag"),
            webURL: "https://iter412.com/",
        },
        {
            image: cyberjsImg,
            title: t("projects.cyberjs.title"),
            subtitle: t("projects.cyberjs.subtitle"),
            tagProject: t("projects.cyberjs.tag"),
            webURL: "https://ui-cyberjs.netlify.app/",
            repURL: "https://github.com/josesalopasog/ui-cyberjs-web"
        },
        {
            image: decimetrixImg,
            title: t("projects.decimetrix.title"),
            subtitle: t("projects.decimetrix.subtitle"),
            tagProject: t("projects.decimetrix.tag"),
            webURL: "https://decimetrix-assets.netlify.app/",
            repURL: "https://github.com/josesalopasog/decimetrix-assets"
        },
    ];

    return (
        <section ref={sectionRef} className="projects" id="projects">
            <div className="projects-sticky">
                <motion.img decoding="async"
                    src={heroSky}
                    alt=""
                    loading="lazy"
                    className="projects-bg"
                    style={{ scale: bgScale }}
                />
                <header className="projects-heading">
                    <Reveal as="p" className="display-eyebrow">{t("projects.eyebrow")}</Reveal>
                    <RevealText text={t("projects.title")} className="display-title" />
                </header>

                <motion.img decoding="async"
                    src={projectsLaptop}
                    alt=""
                    loading="lazy"
                    ref={laptopRef}
                    className="projects-laptop"
                    style={{ y: laptopY, scale: laptopScale, "--to-center": laptopToCenter }}
                />

                <motion.div
                    ref={cardsRef}
                    className="projects-cards"
                    style={rowEmerge}
                    onScroll={handleCardsScroll}
                >
                    {projects.map((project, index) => (
                        <EmergingCard
                            key={project.webURL}
                            index={index}
                            progress={scrollYProgress}
                            geometry={geometry}
                        >
                            <ProjectCard project={project} />
                        </EmergingCard>
                    ))}
                </motion.div>

                {/* Only shown on phones, where the cards become a swipe row */}
                <motion.div className="projects-dots" style={{ opacity: cardsOpacity }}>
                    {projects.map((project, index) => (
                        <button
                            key={project.webURL}
                            type="button"
                            className={`projects-dot ${index === activeCard ? "is-active" : ""}`}
                            onClick={() => goToCard(index)}
                            aria-label={project.title}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

EmergingCard.propTypes = {
    index: PropTypes.number.isRequired,
    progress: PropTypes.object.isRequired,
    geometry: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        tagProject: PropTypes.string,
        webURL: PropTypes.string,
        repURL: PropTypes.string,
    }).isRequired,
};

export default Projects;
