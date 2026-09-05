import express from "express";
const securedRouter = express.Router();

import { tokenverifier } from "../middlewares/token_verification.js";
import { updateUser } from "../secured_controllers/update_user.js";

securedRouter.use('/user', tokenverifier, updateUser);

export default securedRouter;