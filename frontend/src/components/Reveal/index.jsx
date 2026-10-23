//Packages ⬇️
import { Fragment } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Text never moves: it fades in when it scrolls into view and fades out when it leaves
const VIEWPORT = { once: false, amount: 0.3 };

export const Reveal = ({ children, as = "div", delay = 0, className = "" }) => {
    const Component = motion[as];

    return (
        <Component
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, delay, ease: EASE }}
        >
            {children}
        </Component>
    );
};

// Same fade, one word after another
export const RevealText = ({ text, as = "h2", className = "", wordClassName = "", delay = 0 }) => {
    const Component = motion[as];
    const words = text.split(" ");

    return (
        <Component
            key={text} // remount on language change so the new words play in too
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{ staggerChildren: 0.06, delayChildren: delay }}
            aria-label={text}
        >
            {words.map((word, index) => (
                <Fragment key={`${word}-${index}`}>
                    <motion.span
                        className={`reveal-word ${wordClassName}`}
                        aria-hidden="true"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
                        }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 && " "}
                </Fragment>
            ))}
        </Component>
    );
};

Reveal.propTypes = {
    children: PropTypes.node.isRequired,
    as: PropTypes.string,
    delay: PropTypes.number,
    className: PropTypes.string,
};

RevealText.propTypes = {
    text: PropTypes.string.isRequired,
    as: PropTypes.string,
    className: PropTypes.string,
    wordClassName: PropTypes.string,
    delay: PropTypes.number,
};
