import express from "express";
const adminRouter = express.Router();


import { tokenVerifier } from "../middlewares/token_verification.js";
import { updateUsers } from "../admin_controllers/update_users.js";
import { updateProducts } from "../admin_controllers/update_products.js";

adminRouter.use('/users', tokenVerifier, updateUsers);
adminRouter.use('/products', tokenVerifier ,updateProducts);

export default adminRouter;

