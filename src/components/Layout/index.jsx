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

const Layout = () => {
    return(
        <>
            <Header/>
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