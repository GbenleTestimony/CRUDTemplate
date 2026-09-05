import express from "express";
const adminRouter = express.Router();


import { tokenverifier } from "../Middlewares/token_verification";
import { updateUsers } from "../Admin_controllers/update_users";
import { updateProducts } from "../Admin_controllers/update_products";

adminRouter.use('/users', tokenverifier, updateUsers);
adminRouter.use('/products', tokenverifier ,updateProducts);

export default adminRouter;

