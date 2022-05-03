import express from "express";
import { getAllusers, login, signup } from "../controllers/usercontroller";
const router = express.Router();

router.get("/", getAllusers);
router.post("/signup", signup);
router.get("/login", login);
export default router;
