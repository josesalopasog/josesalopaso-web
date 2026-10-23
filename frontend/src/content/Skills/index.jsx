import { useTranslation } from "react-i18next";
import { Reveal, RevealText } from "../../components/Reveal";
import "./styles.css";

const Skills = () => {
    const { t } = useTranslation();
    const groups = t("skills.groups", { returnObjects: true });

    return (
        <section className="section skills" id="skills">
            <div className="section-inner">
                <header className="skills-heading">
                    <Reveal as="p" className="display-eyebrow">{t("skills.eyebrow")}</Reveal>
                    <RevealText text={t("skills.title")} className="display-title" />
                </header>

                <Reveal as="p" className="skills-intro">
                    {t("skills.intro")}
                </Reveal>

                <div className="skills-groups">
                    {groups.map((group, index) => (
                        <Reveal key={group.title} className="skills-group" delay={index * 0.08}>
                            <h3 className="skills-group-title">{group.title}</h3>
                            <ul className="skills-list">
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="skills-quote">
                    <p>{t("skills.quote1")}</p>
                    <a href="#contact" className="gradient-text skills-quote-link">{t("skills.quote2")}</a>
                </Reveal>
            </div>
        </section>
    );
};

export default Skills;
