import express, { Request, Response } from "express";
import { signup, signin } from "../controllers/userController"
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router