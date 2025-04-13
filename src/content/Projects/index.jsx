import CarouselProjects from "../../components/Carousel";
import GradientText from "../../components/GradientText";
import "./styles.css";
import decimetrixImg from "../../assets/images/decimetrix-assets-mockup.webp";
import mercadofakeImg from "../../assets/images/mercadofake-mockup.webp";
import cyberjsImg from "../../assets/images/ui-cyberjs-mockup.webp";
import jsPortfolioImg from "../../assets/images/josesalopaso-portfolio-mockup.webp";
import otherProjectsImg from "../../assets/images/other-projects-mockup.webp";
import { AxiosIcon, CssIcon, ExpressJsIcon, Html5Icon, JavascriptIcon, JwtIcon, MongoDBIcon, NodeJsIcon, ReactIcon, ReduxIcon, SocketIoIcon, TailwindCssIcon } from "../../assets/icons";

const managementSystemSlides = [
    {
        image: decimetrixImg,
        title: "Decimetrix Assets",
        subtitle: "Manage company assets and locate them on a map.",
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
        tagProject: "Management Systems",
        webURL: "https://decimetrix-assets.netlify.app/",
        repURL: "https://github.com/josesalopasog/decimetrix-assets"
    },
    {
        image: otherProjectsImg,
        title: "Wanna see more?",
        subtitle: "Check out more of my projects on GitHub.",
        techs: [],
        tagProject: "Management Systems",
        webURL: "https://github.com/josesalopasog",
        repURL: "https://github.com/josesalopasog?tab=repositories"
    }
];

const eCommerceSlides = [
    {
        image: mercadofakeImg,
        title: "Mercadofake",
        subtitle: "A web clone attempt of Mercado Libre",
        techs: [
            { icon: <ReactIcon />, label: "React" },
            { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
            { icon: <JavascriptIcon />, label: "JavaScript" },
            { icon: <CssIcon />, label: "CSS" },
            { icon: <Html5Icon />, label: "HTML5" },
        ],
        tagProject: "E-commerce",
        webURL: "https://josesalopasog.github.io/mercadofake-web/",
        repURL: "https://github.com/josesalopasog/mercadofake-web"
    },
    {
        image: otherProjectsImg,
        title: "Wanna see more?",
        subtitle: "Check out more of my projects on GitHub.",
        techs: [],
        tagProject: "Utils",
        webURL: "https://github.com/josesalopasog",
        repURL: "https://github.com/josesalopasog?tab=repositories"
    }
];

const utilsSlides = [
    {
        image: cyberjsImg,
        title: "CyberJS - Ui",
        subtitle: "Un proyecto para gestión de activos",
        techs: [
            { icon: <ReactIcon />, label: "React" },
            { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
            { icon: <JavascriptIcon />, label: "JavaScript" },
            { icon: <CssIcon />, label: "CSS" },
            { icon: <Html5Icon />, label: "HTML5" },
        ],
        tagProject: "Utils",
        webURL: "https://ui-cyberjs.netlify.app/",
        repURL: "https://github.com/josesalopasog/ui-cyberjs-web"
    },
    {
        image: otherProjectsImg,
        title: "Wanna see more?",
        subtitle: "Check out more of my projects on GitHub.",
        techs: [],
        tagProject: "Utils",
        webURL: "https://github.com/josesalopasog",
        repURL: "https://github.com/josesalopasog?tab=repositories"
    }
];

const portfoliosSlides = [
    {
        image: jsPortfolioImg,
        title: "My Portfolio",
        subtitle: "Un proyecto para gestión de activos",
        techs: [
            { icon: <ReactIcon />, label: "React" },
            { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
            { icon: <JavascriptIcon />, label: "JavaScript" },
            { icon: <CssIcon />, label: "CSS" },
            { icon: <Html5Icon />, label: "HTML5" },
        ],
        tagProject: "Portfolios",
        webURL: "https://josesalopaso.netlify.app/",
        repURL: "https://github.com/josesalopasog/josesalopaso-web"
    },
    {
        image: otherProjectsImg,
        title: "Wanna see more?",
        subtitle: "Check out more of my projects on GitHub.",
        techs: [],
        tagProject: "Portfolios",
        webURL: "https://github.com/josesalopasog",
        repURL: "https://github.com/josesalopasog?tab=repositories"
    }
];

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
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