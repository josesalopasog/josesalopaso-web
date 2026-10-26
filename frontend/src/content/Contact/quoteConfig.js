// Ballpark freelance pricing in Colombian pesos (COP), sized for the Colombian market.
// Labels live in the locale files under contact.quote; "price" is added to the running total when ticked.
export const PROJECT_TYPES = [
    {
        id: "landing",
        base: 600000,
        features: [
            { id: "customDesign", price: 200000 },
            { id: "copywriting", price: 150000 },
            { id: "extraSections", price: 150000 },
            { id: "animations", price: 250000 },
            { id: "multilanguage", price: 200000 },
            { id: "seo", price: 150000 },
            { id: "booking", price: 100000 },
            { id: "hosting", price: 80000 },
        ],
    },
    {
        id: "portfolio",
        base: 900000,
        features: [
            { id: "customDesign", price: 250000 },
            { id: "cms", price: 400000 },
            { id: "animations", price: 300000 },
            { id: "blog", price: 400000 },
            { id: "multilanguage", price: 200000 },
            { id: "themes", price: 100000 },
            { id: "seo", price: 150000 },
            { id: "hosting", price: 80000 },
        ],
    },
    {
        id: "management",
        base: 3000000,
        features: [
            { id: "roles", price: 500000 },
            { id: "reports", price: 600000 },
            { id: "realtime", price: 500000 },
            { id: "maps", price: 500000 },
            { id: "files", price: 350000 },
            { id: "exports", price: 350000 },
            { id: "payments", price: 700000 },
            { id: "integrations", price: 600000 },
            { id: "pwa", price: 450000 },
        ],
    },
];

// Rush delivery: about 30% faster for +25%
export const RUSH_SURCHARGE = 0.25;

const roundTo = (value, step) => Math.round(value / step) * step;

// Running total shown in the quote card's corner: base price + every ticked option (+ rush)
export const estimateQuote = (type, selected, rush) => {
    const chosen = type.features.filter((feature) => selected.includes(feature.id));
    const total = type.base + chosen.reduce((sum, feature) => sum + feature.price, 0);
    return roundTo(rush ? total * (1 + RUSH_SURCHARGE) : total, 10000);
};

// Prices are kept in COP. With the US flag (English) they're shown in dollars at this fixed rate;
// the quote that reaches the email is always sent in COP.
export const COP_PER_USD = 4000;

const toUsd = (value, step) => Math.max(step, roundTo(value / COP_PER_USD, step));

// "$1.250.000 COP" in Spanish, "$310 USD" in English
export const formatMoney = (value, language) =>
    language === "en"
        ? `$${toUsd(value, 10).toLocaleString("en-US")} USD`
        : `$${value.toLocaleString("es-CO")} COP`;

// Short form for the option chips: "$500 mil" / "$1,2 M" in Spanish, "$125" / "$1.2K" in English
export const formatMoneyShort = (value, language) => {
    if (language === "en") {
        const usd = toUsd(value, 5);
        return usd >= 1000 ? `$${(usd / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 })}K` : `$${usd}`;
    }
    if (value >= 1000000) {
        const millions = (value / 1000000).toLocaleString("es-CO", { maximumFractionDigits: 1 });
        return `$${millions} M`;
    }
    return `$${Math.round(value / 1000)} mil`;
};
