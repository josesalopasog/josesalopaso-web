//Packages ⬇️
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMotionValueEvent, useScroll } from "framer-motion";
//Components ⬇️
import GradientText from "../GradientText";
import DropdownMenuButton from "../DropdownMenuButton";
//Styles ⬇️
import "./styles.css";

// Compact bar that slides in once the hero (which has its own nav) is behind you
const Header = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [isPastHero, setIsPastHero] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsPastHero(value > window.innerHeight * 0.9);
  });

  return (
    <header className={`site-header ${isPastHero ? "is-visible" : ""}`}>
      <a href="#home" className="site-header-brand">
        <GradientText>Jose Salopaso</GradientText>
      </a>
      <nav>
        <ul className="site-header-links">
          <li><a href="#about-me">{t("header.aboutMe")}</a></li>
          <li><a href="#projects">{t("header.projects")}</a></li>
          <li><a href="#skills">{t("header.skills")}</a></li>
          <li><a href="#contact">{t("header.contact")}</a></li>
        </ul>
      </nav>
      <DropdownMenuButton className="site-header-menu-button" />
    </header>
  );
};

export default Header;
