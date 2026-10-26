import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PROJECT_TYPES, formatMoneyShort } from "./quoteConfig";

// Right card: pick a project type and tick options; the total in the corner adds up as you go
const QuoteCard = ({ typeId, selected, rush, total, money, onType, onToggle, onRush, onUse }) => {
    const { t, i18n } = useTranslation();
    const q = (key, options) => t(`contact.quote.${key}`, options);
    const c = (key) => t(`contact.quoteCard.${key}`);
    const type = PROJECT_TYPES.find((item) => item.id === typeId);

    return (
        <div className="contact-card contact-card-quote">
            <div className="contact-card-head">
                <div>
                    <p className="contact-card-eyebrow">{c("eyebrow")}</p>
                    <h3 className="contact-card-title">{c("title")}</h3>
                </div>
                <div className="quote-total" aria-live="polite">
                    <span className="quote-total-label">{c("priceLabel")}</span>
                    <motion.span
                        key={total}
                        className="quote-total-price"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {money(total)}
                    </motion.span>
                </div>
            </div>

            <div className="quote-types" role="radiogroup" aria-label={c("title")}>
                {PROJECT_TYPES.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        role="radio"
                        aria-checked={item.id === typeId}
                        className={`quote-type ${item.id === typeId ? "is-active" : ""}`}
                        onClick={() => onType(item.id)}
                        title={q(`types.${item.id}.desc`)}
                    >
                        {q(`types.${item.id}.name`)}
                    </button>
                ))}
            </div>

            <ul className="quote-included" aria-label={q("included")}>
                {q(`types.${type.id}.includes`, { returnObjects: true }).map((item) => (
                    <li key={item}>✓ {item}</li>
                ))}
            </ul>

            {/* Compact chips: name + price; the longer description shows on hover */}
            <div className="quote-chips">
                {type.features.map((feature) => (
                    <label
                        key={feature.id}
                        className={`quote-chip ${selected.includes(feature.id) ? "is-checked" : ""}`}
                        title={q(`features.${feature.id}.desc`)}
                    >
                        <input type="checkbox" checked={selected.includes(feature.id)} onChange={() => onToggle(feature.id)} />
                        <span className="quote-chip-mark" aria-hidden="true" />
                        <span>{q(`features.${feature.id}.name`)}</span>
                        <span className="quote-chip-price">+{formatMoneyShort(feature.price, i18n.language)}</span>
                    </label>
                ))}

                <label className={`quote-chip quote-chip-rush ${rush ? "is-checked" : ""}`} title={q("rushDesc")}>
                    <input type="checkbox" checked={rush} onChange={onRush} />
                    <span className="quote-chip-mark" aria-hidden="true" />
                    <span>{q("rush")}</span>
                    <span className="quote-chip-price">+25%</span>
                </label>
            </div>

            <div className="contact-card-actions">
                <button type="button" className="card-button card-button-pink" onClick={onUse}>
                    {c("use")} <span aria-hidden="true">→</span>
                </button>
                <p className="quote-note">{c("note")}</p>
            </div>
        </div>
    );
};

QuoteCard.propTypes = {
    typeId: PropTypes.string.isRequired,
    selected: PropTypes.arrayOf(PropTypes.string).isRequired,
    rush: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    money: PropTypes.func.isRequired,
    onType: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onRush: PropTypes.func.isRequired,
    onUse: PropTypes.func.isRequired,
};

export default QuoteCard;
