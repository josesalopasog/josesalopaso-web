import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GithubIcon, InstagramIcon, WhatsappIcon } from "../../icons";

// WhatsApp opens the chat through the username link (wa.me/<username>), so no phone number is ever needed
const ITEMS = [
    { label: "Instagram", handle: "@josesalopaso", href: "https://www.instagram.com/josesalopaso/", Icon: InstagramIcon },
    { label: "WhatsApp", handle: "@josesalopaso", href: "https://wa.me/josesalopaso", Icon: WhatsappIcon },
    { label: "GitHub", handle: "@josesalopasog", href: "https://github.com/josesalopasog", Icon: GithubIcon },
];

// "Write to me on my other networks": the same icons as the hero, centered under the title
const SocialLinks = () => {
    const { t } = useTranslation();
    const [caption, setCaption] = useState("");

    return (
        <div className="contact-socials">
            {/* The title line doubles as the caption: it shows the hovered username */}
            <p className={`contact-socials-title ${caption ? "is-caption" : ""}`} aria-live="polite">
                {caption || t("contact.socials.title")}
            </p>
            <ul className="contact-socials-list">
                {ITEMS.map(({ label, handle, href, Icon }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social"
                            aria-label={`${label} ${handle}`}
                            title={`${label} ${handle}`}
                            onMouseEnter={() => setCaption(`${label} · ${handle}`)}
                            onFocus={() => setCaption(`${label} · ${handle}`)}
                            onMouseLeave={() => setCaption("")}
                            onBlur={() => setCaption("")}
                        >
                            <Icon className="contact-social-icon" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
