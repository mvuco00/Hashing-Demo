import express from "express";
import { getData, sendHash } from "../controllers/hash.js";
const router = express.Router();

router.get("/", getData);
router.post("/", sendHash);


export default router;
