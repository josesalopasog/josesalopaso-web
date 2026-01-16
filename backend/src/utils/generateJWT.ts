import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export const generateJWT = (payload: object) => {
    if (!config.jwtSecret) throw new Error('JWT secret is not defined');

    return jwt.sign(payload, config.jwtSecret, {
        expiresIn: '1h',
    })
};

