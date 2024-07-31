import { Router } from 'express';
import * as emailController from '../controllers/email'

export const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.post('/contact', emailController.contact)