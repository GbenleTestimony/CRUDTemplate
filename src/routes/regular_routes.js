import express from 'express';
const regularRouter = express.Router();

import { login } from '../regular_controllers/login.js';
import { signup } from '../regular_controllers/signup.js';

regularRouter.use('/login', login);
regularRouter.use('/create', signup);

export default regularRouter;