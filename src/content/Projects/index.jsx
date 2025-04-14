import CarouselProjects from "../../components/Carousel";
import { useTranslation } from "react-i18next";
import "./styles.css";
import decimetrixImg from "../../assets/images/decimetrix-assets-mockup.webp";
import mercadofakeImg from "../../assets/images/mercadofake-mockup.webp";
import cyberjsImg from "../../assets/images/ui-cyberjs-mockup.webp";
import jsPortfolioImg from "../../assets/images/josesalopaso-portfolio-mockup.webp";
import otherProjectsImg from "../../assets/images/other-projects-mockup.webp";
import { AxiosIcon, CssIcon, ExpressJsIcon, Html5Icon, JavascriptIcon, JwtIcon, MongoDBIcon, NodeJsIcon, ReactIcon, ReduxIcon, SocketIoIcon, TailwindCssIcon } from "../../icons";

const Projects = () => {
    const { t } = useTranslation();

    const managementSystemSlides = [
        {
            image: decimetrixImg,
            title: t("projects.decimetrix.title"),
            subtitle: t("projects.decimetrix.subtitle"),
            techs: [
                { icon: <MongoDBIcon />, label: "MongoDB" },
                { icon: <ExpressJsIcon />, label: "Express.js" },
                { icon: <ReactIcon />, label: "React" },
                { icon: <NodeJsIcon />, label: "Node.js" },
                { icon: <AxiosIcon />, label: "Axios" },
                { icon: <ReduxIcon />, label: "Redux" },
                { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
                { icon: <JwtIcon />, label: "JWT" },
                { icon: <SocketIoIcon />, label: "Socket.IO" },
            ],
            tagProject: t("projects.decimetrix.tag"),
            webURL: "https://decimetrix-assets.netlify.app/",
            repURL: "https://github.com/josesalopasog/decimetrix-assets"
        },
        {
            image: otherProjectsImg,
            title: t("projects.more.title"),
            subtitle: t("projects.more.subtitle"),
            techs: [],
            tagProject: t("projects.decimetrix.tag"),
            webURL: "https://github.com/josesalopasog",
            repURL: "https://github.com/josesalopasog?tab=repositories"
        }
    ];

    const eCommerceSlides = [
        {
            image: mercadofakeImg,
            title: t("projects.mercadofake.title"),
            subtitle: t("projects.mercadofake.subtitle"),
            techs: [
                { icon: <ReactIcon />, label: "React" },
                { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
                { icon: <JavascriptIcon />, label: "JavaScript" },
                { icon: <CssIcon />, label: "CSS" },
                { icon: <Html5Icon />, label: "HTML5" },
            ],
            tagProject: t("projects.mercadofake.tag"),
            webURL: "https://josesalopasog.github.io/mercadofake-web/",
            repURL: "https://github.com/josesalopasog/mercadofake-web"
        },
        {
            image: otherProjectsImg,
            title: t("projects.more.title"),
            subtitle: t("projects.more.subtitle"),
            techs: [],
            tagProject: t("projects.mercadofake.tag"),
            webURL: "https://github.com/josesalopasog",
            repURL: "https://github.com/josesalopasog?tab=repositories"
        }
    ];

    const utilsSlides = [
        {
            image: cyberjsImg,
            title: t("projects.cyberjs.title"),
            subtitle: t("projects.cyberjs.subtitle"),
            techs: [
                { icon: <ReactIcon />, label: "React" },
                { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
                { icon: <JavascriptIcon />, label: "JavaScript" },
                { icon: <CssIcon />, label: "CSS" },
                { icon: <Html5Icon />, label: "HTML5" },
            ],
            tagProject: t("projects.cyberjs.tag"),
            webURL: "https://ui-cyberjs.netlify.app/",
            repURL: "https://github.com/josesalopasog/ui-cyberjs-web"
        },
        {
            image: otherProjectsImg,
            title: t("projects.more.title"),
            subtitle: t("projects.more.subtitle"),
            techs: [],
            tagProject: t("projects.cyberjs.tag"),
            webURL: "https://github.com/josesalopasog",
            repURL: "https://github.com/josesalopasog?tab=repositories"
        }
    ];

    const portfoliosSlides = [
        {
            image: jsPortfolioImg,
            title: t("projects.portfolio.title"),
            subtitle: t("projects.portfolio.subtitle"),
            techs: [
                { icon: <ReactIcon />, label: "React" },
                { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
                { icon: <JavascriptIcon />, label: "JavaScript" },
                { icon: <CssIcon />, label: "CSS" },
                { icon: <Html5Icon />, label: "HTML5" },
            ],
            tagProject: t("projects.portfolio.tag"),
            webURL: "https://josesalopaso.netlify.app/",
            repURL: "https://github.com/josesalopasog/josesalopaso-web"
        },
        {
            image: otherProjectsImg,
            title: t("projects.more.title"),
            subtitle: t("projects.more.subtitle"),
            techs: [],
            tagProject: t("projects.portfolio.tag"),
            webURL: "https://github.com/josesalopasog",
            repURL: "https://github.com/josesalopasog?tab=repositories"
        }
    ];

    return (
        <>
            <h1>{t("projects.title")}</h1>
            <div className="projects-section-container">
                <div className="carousels-container">
                    <div className="carousel-wrapper">
                        <CarouselProjects items={managementSystemSlides} />
                    </div>
                    <div className="carousel-wrapper">
                        <CarouselProjects items={eCommerceSlides} />
                    </div>
                </div>
                <div className="carousels-container">
                    <div className="carousel-wrapper">
                        <CarouselProjects items={utilsSlides} />
                    </div>
                    <div className="carousel-wrapper">
                        <CarouselProjects items={portfoliosSlides} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;