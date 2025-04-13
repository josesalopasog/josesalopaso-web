import GradientText from "../../components/GradientText";
import "./styles.css"

const AboutMe = () => {
    return (
        <>
            <h1>About Me</h1>
            <div className="about-me-container">
                <p>
                    I love and am passionate about creating cool technological things. That's why I got into the world of programming and electronic engineering. With these acquired skills, I enjoy helping people and companies make their dreams come true.
                </p>
            </div>
            <div className="about-me-quote">
                <GradientText>
                    <span>Wanna create something cool together? </span> 
                    <span>
                        <a href="#contact">👇🏻</a>
                    </span>
                </GradientText>
            </div>
        </>
    );
};

export default AboutMe;
