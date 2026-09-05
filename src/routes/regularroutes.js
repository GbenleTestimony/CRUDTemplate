import express from 'express';
const regularRouter = express.Router();

import { login } from '../Regularcontrollers/login.js';
import { signup } from '../Regularcontrollers/signup.js';

regularRouter.use('/login', login);
regularRouter.use('/create', signup);

export default regularRouter;