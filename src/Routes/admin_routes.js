import express from "express";
const adminRouter = express.Router();

import { tokenverifier } from "../Middlewares/token_verification.js";
import { updateUsers } from "../Admin_controllers/update_users.js";
import { updateProducts } from "../Admin_controllers/update_products.js";

adminRouter.use('/users', tokenverifier, updateUsers);
adminRouter.use('/products', tokenverifier ,updateProducts);

export default adminRouter;

