import { Router } from 'express';
import { sendQuoteRequest } from '../controllers/quote.controller';

const router = Router();

router.post('/', sendQuoteRequest);

export default router;
