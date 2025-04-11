import CarouselProjects from "../../components/Carousel";
import GradientText from "../../components/GradientText";
import "./styles.css";
import decimetrixImg from "../../assets/images/img-decimetrix-assets.webp";
import mercadofakeImg from "../../assets/images/img-mercadofake.webp";
import cyberjsImg from "../../assets/images/img-cyberjs-ui.webp"
import jsPortfolioImg from "../../assets/images/img-josesalopaso-portfolio.webp";
import managementImg from "../../assets/images/img-management-systems.webp";
import ecommerceImg from "../../assets/images/img-ecommerce.webp";
import utilsImg from "../../assets/images/img-utils.webp";
import portfoliosImg from "../../assets/images/img-portfolios.webp"

const managementSystemSlides = [
    {
        image: decimetrixImg,
        title: "Decimetrix Assets",
        subtitle: "Un proyecto para gestión de activos",
        tagProject: "Management Systems",
        webURL: "https://decimetrix-assets.netlify.app/",
        repURL: "https://github.com/josesalopasog/decimetrix-assets"
    },
    {
        image: managementImg,
        title: "Others",
        subtitle: "See others in my github",
        tagProject: "Management Systems",
        webURL: "https://github.com/josesalopasog",
        repURL: "https://github.com/josesalopasog?tab=repositories"
    }
];

const eCommerceSlides = [
    {
        image: mercadofakeImg,
        title: "Mercadofake",
        subtitle: "Un intento de clon de Mercado Libre",
        tagProject: "E-commerces",
        webURL: "https://josesalopasog.github.io/mercadofake-web/",
        repURL: "https://github.com/josesalopasog/mercadofake-web"
    },
    {
        image: ecommerceImg,
        title: "Others",
        subtitle: "See others in my github",
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
        tagProject: "Utils",
        webURL: "https://ui-cyberjs.netlify.app/",
        repURL: "https://github.com/josesalopasog/ui-cyberjs-web"
    },
    {
        image: utilsImg,
        title: "Others",
        subtitle: "See others in my github",
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
        tagProject: "Portfolios",
        webURL: "https://josesalopaso.netlify.app/",
        repURL: "https://github.com/josesalopasog/josesalopaso-web"
    },
    {
        image: portfoliosImg,
        title: "Others",
        subtitle: "See others in my github",
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
                        <CarouselProjects slides={managementSystemSlides} />
                    </div>
                    <div className="carousel-wrapper">
                        <CarouselProjects slides={eCommerceSlides} />
                    </div>
                </div>
                <div className="carousels-container">
                    <div className="carousel-wrapper">
                        <CarouselProjects slides={utilsSlides} />
                    </div>
                    <div className="carousel-wrapper">
                        <CarouselProjects slides={portfoliosSlides} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects; 