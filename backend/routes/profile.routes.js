import express from "express";
import { authMidleware } from "../middlewares/authMiddleware.js";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/profile", authMidleware, getProfile);

export default router;
