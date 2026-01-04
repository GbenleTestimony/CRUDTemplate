// express is always required in route files
import express from "express";
const router = express.Router();
import {loginUser} from "../controllers/auth.controller.js"

router.post('/', loginUser);

export default  router;