import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "../../components/Reveal";
import MailCard from "./MailCard";
import QuoteCard from "./QuoteCard";
import SocialLinks from "./SocialLinks";
import { PROJECT_TYPES, estimateQuote, formatCop } from "./quoteConfig";
import heroSky from "../../assets/images/hero-sky.webp";
import "./styles.css";

const Contact = () => {
    const { t } = useTranslation();
    const contactRef = useRef(null);
    const nameRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: contactRef, offset: ["start end", "end start"] });
    const skyY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const skyScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.05]);

    // Quote state lives here: the right card edits it, the left card sends it when attached
    const [typeId, setTypeId] = useState(PROJECT_TYPES[0].id);
    const [selected, setSelected] = useState([]);
    const [rush, setRush] = useState(false);
    const [isQuoteAttached, setIsQuoteAttached] = useState(false);

    const type = PROJECT_TYPES.find((item) => item.id === typeId);
    const total = estimateQuote(type, selected, rush);
    const money = formatCop;
    const typeLabel = t(`contact.quote.types.${typeId}.name`);

    const quote = isQuoteAttached
        ? {
            type: typeId,
            label: typeLabel,
            features: [
                ...selected.map((id) => t(`contact.quote.features.${id}.name`)),
                ...(rush ? [t("contact.quote.rush")] : []),
            ],
            total,
        }
        : null;

    const chooseType = (id) => {
        setTypeId(id);
        setSelected([]);
    };

    const toggleFeature = (id) =>
        setSelected((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

    // "Request this quote": attach it to the email card and jump there
    const attachQuote = () => {
        setIsQuoteAttached(true);
        nameRef.current?.focus({ preventScroll: true });
        nameRef.current?.closest("form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <section ref={contactRef} className="section contact" id="contact">
            <motion.img
                src={heroSky}
                alt=""
                loading="lazy"
                className="contact-sky"
                style={{ y: skyY, scale: skyScale }}
            />
            <div className="contact-shade" />

            <div className="section-inner contact-inner">
                <header className="contact-heading">
                    <div>
                        <Reveal as="p" className="display-eyebrow">{t("contact.eyebrow")}</Reveal>
                        <RevealText text={t("contact.title")} className="contact-title" />
                    </div>
                    <Reveal as="p" className="contact-intro" delay={0.1}>
                        {t("contact.intro")}
                    </Reveal>
                </header>

                <div className="contact-cards">
                    <Reveal className="contact-card-wrap">
                        <MailCard
                            ref={nameRef}
                            quote={quote}
                            quoteSummary={t("contact.quoteCard.attached", { label: typeLabel, price: money(total) })}
                            onRemoveQuote={() => setIsQuoteAttached(false)}
                        />
                    </Reveal>
                    <Reveal className="contact-card-wrap" delay={0.12}>
                        <QuoteCard
                            typeId={typeId}
                            selected={selected}
                            rush={rush}
                            total={total}
                            money={money}
                            onType={chooseType}
                            onToggle={toggleFeature}
                            onRush={() => setRush((value) => !value)}
                            onUse={attachQuote}
                        />
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <SocialLinks />
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
