// express is always required in route files
import express from "express";
const router = express.Router();
import {createUser} from "../controllers/newUserController.js";

router.post('/', createUser)

export default router;