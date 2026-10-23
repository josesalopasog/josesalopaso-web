import { useRef, useState } from "react";
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

const PlayIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
);

// Poster-style card: the whole card (and its play button) opens the live site
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
                <img src={project.image} alt="" loading="lazy" className="project-card-image" />
                <span className="project-card-shade" />
                <span className="project-card-play">
                    <PlayIcon />
                </span>
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
    const shadeOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);
    // Three beats: 1) the laptop rises in the center, 2) it slides to the left, 3) all cards rise together
    const laptopY = useTransform(scrollYProgress, [0, 0.28], ["75%", "0%"], { ease: easeOutQuint });
    const laptopScale = useTransform(scrollYProgress, [0.32, 0.55], [1.12, 1]);
    const laptopToCenter = useTransform(scrollYProgress, [0.32, 0.55], [1, 0], { ease: easeOutQuint });
    const cardsY = useTransform(scrollYProgress, [0.58, 0.9], ["110vh", "0vh"], { ease: easeOutQuint });
    const cardsOpacity = useTransform(scrollYProgress, [0.58, 0.68], [0, 1]);

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
                <motion.img
                    src={heroSky}
                    alt=""
                    loading="lazy"
                    className="projects-bg"
                    style={{ scale: bgScale }}
                />
                <motion.div className="projects-shade" style={{ opacity: shadeOpacity }} />

                <header className="projects-heading">
                    <Reveal as="p" className="display-eyebrow">{t("projects.eyebrow")}</Reveal>
                    <RevealText text={t("projects.title")} className="display-title" />
                </header>

                <motion.img
                    src={projectsLaptop}
                    alt=""
                    loading="lazy"
                    className="projects-laptop"
                    style={{ y: laptopY, scale: laptopScale, "--to-center": laptopToCenter }}
                />

                <motion.div
                    ref={cardsRef}
                    className="projects-cards"
                    style={{ y: cardsY, opacity: cardsOpacity }}
                    onScroll={handleCardsScroll}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.webURL} project={project} />
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
