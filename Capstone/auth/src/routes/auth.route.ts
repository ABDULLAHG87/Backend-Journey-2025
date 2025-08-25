import { Router } from "express";
import { registerUser, loginUser, getUsers } from "../controllers/auth.controller";
import {authMiddleware} from "../middlewares/auth.middleware"

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", authMiddleware, getUsers)


export default router;
