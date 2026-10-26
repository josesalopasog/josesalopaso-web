import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Pop-up with the quote's terms: the visitor has to tick the box inside it and press "Accept"
const TermsModal = ({ initiallyAccepted, onAccept, onClose }) => {
    const { t } = useTranslation();
    const terms = (key, options) => t(`contact.terms.${key}`, options);
    const [isChecked, setIsChecked] = useState(initiallyAccepted);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return createPortal(
        <motion.div
            className="terms-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            <motion.div
                className="terms-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="terms-title"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.4, ease: EASE }}
            >
                <div className="terms-head">
                    <h3 id="terms-title">{terms("title")}</h3>
                    <button type="button" className="terms-close" onClick={onClose} aria-label={terms("close")}>
                        ✕
                    </button>
                </div>

                {/* data-lenis-prevent: let this box scroll on its own instead of the smooth-scrolled page */}
                <div className="terms-body" data-lenis-prevent>
                    <p className="terms-intro">{terms("intro")}</p>
                    {terms("sections", { returnObjects: true }).map((section) => (
                        <section key={section.title} className="terms-section">
                            <h4>{section.title}</h4>
                            <p>{section.text}</p>
                        </section>
                    ))}
                </div>

                <div className="terms-foot">
                    <label className="quote-consent">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(event) => setIsChecked(event.target.checked)}
                            autoFocus
                        />
                        <span className="quote-check" aria-hidden="true" />
                        <span className="terms-accept-text">{terms("accept")}</span>
                    </label>
                    <div className="terms-actions">
                        <button type="button" className="terms-cancel" onClick={onClose}>
                            {terms("cancel")}
                        </button>
                        <button
                            type="button"
                            className="card-button card-button-pink"
                            disabled={!isChecked}
                            onClick={onAccept}
                        >
                            {terms("confirm")}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

TermsModal.propTypes = {
    initiallyAccepted: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TermsModal;
