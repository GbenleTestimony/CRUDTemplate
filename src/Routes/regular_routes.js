import express from 'express';
const regularRouter = express.Router();

import { login } from '../Regular_controllers/login';
import { signup } from '../Regular_controllers/signup';

regularRouter.use('/login', login);
regularRouter.use('/create', signup);

export default regularRouter;