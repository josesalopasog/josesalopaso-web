import path from 'path';
import dotenv from 'dotenv';

// Load backend/.env no matter which folder the server is started from
dotenv.config({ path: path.resolve(__dirname, '../../.env'), quiet: true });

export const config = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
    clerkSecretKey: process.env.CLERK_SECRET_KEY || '',
    clerkIssuer: process.env.CLERK_ISSUER || '',
    // Quote requests are emailed through this SMTP account (for Gmail: an App Password, not the real password)
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT || 465),
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
    },
    quoteTo: process.env.QUOTE_TO || 'josesalopaso@gmail.com',
    isProduction: process.env.NODE_ENV === 'production',
};
