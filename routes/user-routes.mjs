import express from "express";
import { getAllUser, login, signUp } from "../controllers/user-controllers.mjs";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signUp", signUp);
router.post("/login", login);

export default router;
