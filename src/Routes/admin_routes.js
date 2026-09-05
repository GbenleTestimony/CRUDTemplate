import express from "express";
const adminRouter = express.Router();


import { tokenVerifier } from "../middlewares/token_verification.js";
import { updateUsers } from "../admin_controllers/update_users.js";
import { updateProducts } from "../admin_controllers/update_products.js";

adminRouter.use('/users', tokenverifier, updateUsers);
adminRouter.use('/products', tokenverifier ,updateProducts);

export default adminRouter;

