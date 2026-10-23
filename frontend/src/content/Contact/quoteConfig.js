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

// Colombian format in both languages: "$1.250.000 COP"
export const formatCop = (value) => `$${value.toLocaleString("es-CO")} COP`;

// Short form for the option chips: "$500 mil" / "$500K", "$1,2 M" / "$1.2M"
export const formatCopShort = (value, language) => {
    if (value >= 1000000) {
        const millions = (value / 1000000).toLocaleString(language === "es" ? "es-CO" : "en-US", { maximumFractionDigits: 1 });
        return language === "es" ? `$${millions} M` : `$${millions}M`;
    }
    const thousands = Math.round(value / 1000);
    return language === "es" ? `$${thousands} mil` : `$${thousands}K`;
};
