import { ReactIcon, TailwindCssIcon,NodeJsIcon, MongoDBIcon, PostgreSqlICon, ReduxIcon, AxiosIcon, JavascriptIcon, CssIcon, Html5Icon, TypescriptIcon, ExpressJsIcon, JwtIcon, SocketIoIcon,DockerIcon, PostmanIcon, GithubIcon, GitIcon, VsCodeIcon, PowerBiIcon } from "../../assets/icons";
import InfiniteSlider from "../../components/InfiniteSlider";
import "./styles.css";

const Skills = () => {
    const frontendItems = [
        { icon: <ReactIcon />, label: "React" },
        { icon: <ReduxIcon />, label: "Redux" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <TailwindCssIcon />, label: "Tailwind CSS" },
        { icon: <TypescriptIcon />, label: "Typescript" },
        { icon: <JavascriptIcon />, label: "Javascript" },
        { icon: <CssIcon />, label: "CSS3" },
        { icon: <Html5Icon />, label: "HTML5" },
    ];

    const backendItems = [
        { icon: <MongoDBIcon />, label: "MongoDB" },
        { icon: <ExpressJsIcon />, label: "ExpressJS" },
        { icon: <NodeJsIcon />, label: "NodeJS" },
        { icon: <JwtIcon/>, label: "JWT" },
        { icon: <SocketIoIcon />, label: "Socket.io" },
        { icon: <PostgreSqlICon />, label: "PostgreSQL" },
        { icon: <PostmanIcon />, label: "Postman" },
        { icon: <DockerIcon />, label: "Docker" },
    ];

    const generalItems = [
        { icon: <GithubIcon />, label: "Github" },
        { icon: <GitIcon />, label: "Git" },
        { icon: <VsCodeIcon />, label: "VS Code" },
        { icon: <PowerBiIcon />, label: "Power BI" },
    ];

    return (
        <>
            <h1>Stack · Skills</h1>
            <div className="skills-content">
                <div className="skills-container">
                    <h2>Frontend : </h2>
                    <div className="skills-slider-container">
                        <InfiniteSlider items={frontendItems} speed={50} direction="left" />
                    </div>
                </div>
                <div className="skills-container">
                    <h2>Backend : </h2>
                    <div className="skills-slider-container">
                        <InfiniteSlider items={backendItems} speed={50} direction="right" />
                    </div>
                </div>
                <div className="skills-container">
                    <h2>General : </h2>
                    <div className="skills-slider-container">
                        <InfiniteSlider items={generalItems} speed={30} direction="left" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;