//Packages ⬇️
import { useEffect } from "react";
import Lenis from "lenis";
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
import FloatingControls from "../FloatingControls";

// Inertial smooth scrolling (skipped for people who prefer reduced motion)
const useSmoothScroll = () => {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({ lerp: 0.09, anchors: true });
        let frameId;
        const raf = (time) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };
        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);
};

const Layout = () => {
    useSmoothScroll();

    return (
        <>
            <Header />
            <DropdownMenu />
            <main>
                <Hero />
                <AboutMe />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
            <FloatingControls />
        </>
    );
};

export default Layout;

// Layout component that defines the main structure of the application.
// It includes the Header, DropdownMenu, Footer, the floating language/theme controls,
// and the main content sections such as Hero, AboutMe, Projects, Skills, and Contact.
