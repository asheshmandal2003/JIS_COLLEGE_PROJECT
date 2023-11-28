import express from "express";
import { scholarships } from "../controllers/scholarships.js";

const router = express.Router();

router.route("/scholarships").get(scholarships);

export default router;
