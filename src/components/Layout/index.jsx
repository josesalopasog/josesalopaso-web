//Sections ⬇️
import Hero from "../../content/Hero";
import AboutMe from "../../content/AboutMe";
import Projects from "../../content/Projects";
import Skills from "../../content/Skills";
import Contact from "../../content/Contact";
//Components ⬇️
import Header from "../Header";
import Footer from "../Footer";
import DropdownMenu from "../DropdownMenu";
import Profile from "../../content/Profile";
//Styles ⬇️
import "./styles.css";

const Layout = () => {
    return(
        <>
            <Header/>
            <DropdownMenu />
            <main>
                <div className="main-content">
                    <section className="hero-section" id="about-me">
                        <Hero/>
                    </section>
                    <section className="profile-section">
                        <Profile />
                    </section>
                    <section className="about-me-section">
                        <AboutMe/>    
                    </section>
                    <section className="projects-section" id="projects">
                        <Projects/>
                    </section>
                    <section className="skills-section" id="skills">
                        <Skills/>
                    </section>
                    <section className="contact-section" id="contact">
                        <Contact/>    
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;

// Layout component that defines the main structure of the application.
// It includes the Header, DropdownMenu, Footer, and the main content sections
// such as Hero, AboutMe, Projects, Skills, and Contact.
// This component ensures consistent layout across all parts of the page.