import express from "express";
const adminRouter = express.Router();

import { tokenverifier } from "../Middlewares/tokenverification.js";
import { updateUsers } from "../Admincontrollers/updateusers.js";
import { updateProducts } from "../Admincontrollers/updateproducts.js";

adminRouter.use('/users', tokenverifier, updateUsers);
adminRouter.use('/products', tokenverifier ,updateProducts);

export default adminRouter;

