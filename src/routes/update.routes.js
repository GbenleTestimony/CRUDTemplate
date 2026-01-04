import express from 'express'
import { updateUser } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/', updateUser);

export default router;