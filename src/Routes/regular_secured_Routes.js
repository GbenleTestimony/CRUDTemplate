import express from "express";
const securedRouter = express.Router();

import { tokenverifier } from "../Middlewares/token_verification";
import { updateUser } from "../Secured_controllers/update_user";

securedRouter.use('/user', tokenverifier, updateUser);

export default securedRouter;