import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import { config } from '../config/env';
import { canSendMail, isDryRun, mailer } from '../utils/mailer';

const PROJECT_TYPES = ['landing', 'portfolio', 'management'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Very small in-memory limiter: 5 requests per IP per hour
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter((time) => now - time < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    return recent.length > MAX_PER_WINDOW;
};

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] as string);

export const sendQuoteRequest = asyncHandler(
    async (req: Request, res: Response) => {
        const body = req.body || {};

        // Honeypot: real people never fill the hidden "website" field
        if (clean(body.website, 200)) return res.status(200).json({ success: true });

        if (isRateLimited(req.ip || 'unknown')) {
            return res.status(429).json({ success: false, message: 'Too many requests, try again later' });
        }

        const name = clean(body.name, 120);
        const email = clean(body.email, 160);
        const phone = clean(body.phone, 40);
        const projectTitle = clean(body.projectTitle, 120);
        const message = clean(body.message, 4000);
        const language = clean(body.language, 5);

        // Optional: the quote the visitor built in the right-hand card
        const rawQuote = body.quote && typeof body.quote === 'object' ? body.quote : null;
        const quote = rawQuote && PROJECT_TYPES.includes(clean(rawQuote.type, 30))
            ? {
                label: clean(rawQuote.label, 80),
                features: Array.isArray(rawQuote.features)
                    ? rawQuote.features.slice(0, 30).map((feature: unknown) => clean(feature, 120)).filter(Boolean)
                    : [],
                total: Number(rawQuote.total) || 0,
            }
            : null;

        if (!name || !EMAIL_RE.test(email) || !message || body.consent !== true) {
            return res.status(400).json({ success: false, message: 'Missing or invalid fields' });
        }

        if (!canSendMail) {
            return res.status(503).json({ success: false, message: 'Email service is not configured' });
        }

        const rows: [string, string][] = [
            ['Name', name],
            ['Email', email],
            ['Phone / WhatsApp', phone || '—'],
            ['Project title', projectTitle || '—'],
            ['Site language', language || '—'],
        ];
        if (quote) {
            rows.push(
                ['Project', quote.label],
                ['Selected options', quote.features.length ? quote.features.join(', ') : '—'],
                ['Estimate shown', `$${quote.total.toLocaleString('es-CO')} COP`],
            );
        }
        const topic = projectTitle ? `“${projectTitle}”` : quote?.label;
        const subject = topic ? `New project request: ${topic} — ${name}` : `New message from your portfolio — ${name}`;

        const html = `
            <h2>${quote ? 'New quote request' : 'New message'} from your portfolio</h2>
            <table cellpadding="6" style="border-collapse:collapse">
                ${rows.map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`).join('')}
            </table>
            <h3>Message</h3>
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `;
        const text = `${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\nMessage:\n${message}`;

        const info = await mailer.sendMail({
            from: config.smtp.user ? `"Portfolio" <${config.smtp.user}>` : 'portfolio@localhost',
            to: config.quoteTo,
            replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
            subject,
            text,
            html,
        });

        if (isDryRun) console.log('📨 [dry run, SMTP not configured] Quote email:\n', info.message?.toString());

        res.json({ success: true });
    }
);
