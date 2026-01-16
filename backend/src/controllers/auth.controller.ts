import { Request, Response, NextFunction } from 'express';
import { generateJWT } from '../utils/generateJWT';
import asyncHandler from '../middlewares/asyncHandler';

export const getProtectedData = asyncHandler(
    async (req: Request, res: Response) => {
        const user = (req as any).clerkUser;
        if(!user) return res.status(401).json({
            message: 'Not authorized, no user provided',
            success: false
        });
        
        const token = generateJWT({
            id: user.id,
            email: user.email,
        });
        
        res.json({
            message: '✅ Authentication successful',
            token,
            user,
        });
    }
);