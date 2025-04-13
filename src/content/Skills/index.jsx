import { useTranslation } from "react-i18next";
import { ReactIcon, TailwindCssIcon, NodeJsIcon, MongoDBIcon, PostgreSqlICon, ReduxIcon, AxiosIcon, JavascriptIcon, CssIcon, Html5Icon, TypescriptIcon, ExpressJsIcon, JwtIcon, SocketIoIcon, DockerIcon, PostmanIcon, GithubIcon, GitIcon, VsCodeIcon, PowerBiIcon } from "../../assets/icons";
import GradientText from "../../components/GradientText";
import InfiniteSlider from "../../components/InfiniteSlider";
import "./styles.css";

const Skills = () => {
    const { t } = useTranslation();

    const frontendItems = [
        { icon: <ReactIcon />, label: "React", color: "#61DAFB" },
        { icon: <ReduxIcon />, label: "Redux", color: "#764ABC" },
        { icon: <AxiosIcon />, label: "Axios", color: "#5A29E4" },
        { icon: <TailwindCssIcon />, label: "Tailwind CSS", color: "#38BDF8" },
        { icon: <TypescriptIcon />, label: "Typescript", color: "#3178C6" },
        { icon: <JavascriptIcon />, label: "Javascript", color: "#F7DF1E" },
        { icon: <CssIcon />, label: "CSS3", color: "#264DE4" },
        { icon: <Html5Icon />, label: "HTML5", color: "#E34F26" },
    ];

    const backendItems = [
        { icon: <MongoDBIcon />, label: "MongoDB", color: "#47A248" },
        { icon: <ExpressJsIcon />, label: "ExpressJS", color: "#2200FF" },
        { icon: <NodeJsIcon />, label: "NodeJS", color: "#339933" },
        { icon: <JwtIcon />, label: "JWT", color: "#EE00FF" },
        { icon: <SocketIoIcon />, label: "Socket.io", color: "#2200FF" },
        { icon: <PostgreSqlICon />, label: "PostgreSQL", color: "#336791" },
        { icon: <PostmanIcon />, label: "Postman", color: "#FF6C37" },
        { icon: <DockerIcon />, label: "Docker", color: "#2496ED" },
    ];

    const generalItems = [
        { icon: <GithubIcon />, label: "Github", color: "#2200FF" },
        { icon: <GitIcon />, label: "Git", color: "#F05032" },
        { icon: <VsCodeIcon />, label: "VS Code", color: "#007ACC" },
        { icon: <PowerBiIcon />, label: "Power BI", color: "#F2C811" },
    ];

    return (
        <>
            <h1>{t("skills.title")}</h1>
            <div className="skills-content">
                <div className="skills-container">
                    <div className="skills-slider-container">
                        <InfiniteSlider items={frontendItems} />
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-slider-container">
                        <InfiniteSlider items={backendItems} />
                    </div>
                </div>
                <div className="skills-container">
                    <div className="skills-slider-container">
                        <InfiniteSlider items={generalItems} />
                    </div>
                </div>
            </div>
            <div className="skills-quote">
                <GradientText>{t("skills.quote1")}</GradientText>
                <GradientText>{t("skills.quote2")}</GradientText>
            </div>
        </>
    );
};

export default Skills;