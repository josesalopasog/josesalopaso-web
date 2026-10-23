import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@clerk/backend';
import { config } from '../config/env';
import asyncHandler from './asyncHandler';

export const verifyClerkJWT = asyncHandler (
    async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;

        if(!authHeader?.startsWith('Bearer ')) return res.status(401).json({
            message: 'Not authorized, no token provided',
        });

        const token = authHeader.split(' ')[1]; 

        try {
            const payload = await verifyToken(token, { 
                secretKey: config.clerkSecretKey,
                issuer: config.clerkIssuer
            });
            (req as any).clerkUser = payload;
            next();
        } catch (err){
            return res.status(401).json({
                message: 'Invalid token or expired'
            })
        }
    }
)