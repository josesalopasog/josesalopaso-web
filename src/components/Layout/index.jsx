//Sections ⬇️
import Hero from "../../content/Hero";
import AboutMe from "../../content/AboutMe";
import Projects from "../../content/Projects";
import Skills from "../../content/Skills";
import Contact from "../../content/Contact";
//Components ⬇️
import Header from "../Header";
import Footer from "../Footer";
//Styles ⬇️
import "./styles.css";
import DropdownMenu from "../DropdownMenu";

const Layout = () => {
    return(
        <>
            <Header/>
            <DropdownMenu />
            <main>
                <Hero/>
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Contact/>
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