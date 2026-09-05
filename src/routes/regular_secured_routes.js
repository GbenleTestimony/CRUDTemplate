import express from "express";
const securedRouter = express.Router();

import { tokenVerifier } from "../middlewares/token_verification.js";
import { updateUser } from "../secured_controllers/update_user.js";

securedRouter.use('/user', tokenVerifier, updateUser);

export default securedRouter;