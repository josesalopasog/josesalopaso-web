import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL ?? "";

const EMPTY_FIELDS = {
    name: "",
    email: "",
    phone: "",
    projectTitle: "",
    message: "",
    consent: false,
    website: "", // honeypot, hidden from people
};

// Left card: the email form. If the visitor attached the quote from the right card, it travels with the message.
const MailCard = forwardRef(({ quote, quoteSummary, onRemoveQuote }, nameRef) => {
    const { t, i18n } = useTranslation();
    const f = (key) => t(`contact.form.${key}`);
    const [fields, setFields] = useState(EMPTY_FIELDS);
    const [status, setStatus] = useState("idle");

    const updateField = (event) => {
        const { name, value, type, checked } = event.target;
        setFields((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch(`${API_URL}/api/quote`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...fields, quote, language: i18n.language }),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            setStatus("success");
            setFields(EMPTY_FIELDS);
            onRemoveQuote();
        } catch {
            setStatus("error");
        }
    };

    return (
        <form className="contact-card contact-card-mail" onSubmit={handleSubmit}>
            <p className="contact-card-eyebrow">{t("contact.mailCard.eyebrow")}</p>
            <h3 className="contact-card-title">{t("contact.mailCard.title")}</h3>

            <div className="mail-fields">
                <label className="mail-field">
                    <span>{f("name")} *</span>
                    <input ref={nameRef} name="name" value={fields.name} onChange={updateField} required maxLength={120} autoComplete="name" />
                </label>
                <label className="mail-field">
                    <span>{f("email")} *</span>
                    <input name="email" type="email" value={fields.email} onChange={updateField} required maxLength={160} autoComplete="email" />
                </label>
                <label className="mail-field">
                    <span>{f("phone")}</span>
                    <input name="phone" type="tel" value={fields.phone} onChange={updateField} maxLength={40} autoComplete="tel" />
                </label>
                <label className="mail-field mail-field-wide">
                    <span>{f("projectTitle")}</span>
                    <input name="projectTitle" value={fields.projectTitle} onChange={updateField} maxLength={120} />
                </label>
                {/* Grows to fill whatever height the card has left */}
                <label className="mail-field mail-field-wide mail-field-message">
                    <span>{f("message")} *</span>
                    <textarea
                        name="message"
                        value={fields.message}
                        onChange={updateField}
                        required
                        rows={3}
                        maxLength={4000}
                        placeholder={f("messagePlaceholder")}
                    />
                </label>
                {/* Honeypot: bots fill every input, people never see this one */}
                <label className="mail-honeypot" aria-hidden="true">
                    Website
                    <input name="website" value={fields.website} onChange={updateField} tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <AnimatePresence>
                {quote && (
                    <motion.p
                        className="mail-attached"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <span>{quoteSummary}</span>
                        <button type="button" onClick={onRemoveQuote}>{t("contact.quoteCard.remove")}</button>
                    </motion.p>
                )}
            </AnimatePresence>

            <div className="contact-card-actions">
                <button type="submit" className="card-button card-button-peach" disabled={status === "sending"}>
                    {status === "sending" ? f("sending") : f("submit")} <span aria-hidden="true">→</span>
                </button>
                <label className="quote-consent">
                    <input type="checkbox" name="consent" checked={fields.consent} onChange={updateField} required />
                    <span className="quote-check" aria-hidden="true" />
                    <span>{f("consent")}</span>
                </label>
            </div>

            {(status === "success" || status === "error") && (
                <p className={`quote-status is-${status}`} role="status">{f(status)}</p>
            )}
        </form>
    );
});

MailCard.displayName = "MailCard";

MailCard.propTypes = {
    quote: PropTypes.object,
    quoteSummary: PropTypes.string,
    onRemoveQuote: PropTypes.func.isRequired,
};

export default MailCard;
