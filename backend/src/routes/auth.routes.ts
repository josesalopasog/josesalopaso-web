import { Router } from 'express';
import { getProtectedData  } from '../controllers/auth.controller';
import { verifyClerkJWT } from '../middlewares/verifyClerkJWT';

const router = Router();

router.get('/protected', verifyClerkJWT, getProtectedData );

export default router;