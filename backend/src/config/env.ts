import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
    clerkSecretKey: process.env.CLERK_SECRET_KEY || '',
    clerkIssuer: process.env.CLERK_ISSUER || '',
};