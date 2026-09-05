import express from 'express';
const regularRouter = express.Router();

import { login } from '../Regular_controllers/login.js';
import { signup } from '../Regular_controllers/signup.js';

regularRouter.use('/login', login);
regularRouter.use('/create', signup);

export default regularRouter;