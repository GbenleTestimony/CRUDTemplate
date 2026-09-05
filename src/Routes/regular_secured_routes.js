import express from "express";
const securedRouter = express.Router();

import { tokenverifier } from "../Middlewares/tokenverification.js";
import { updateUser } from "../Secured_controllers/update_user.js";

securedRouter.use('/user', tokenverifier, updateUser);

export default securedRouter;