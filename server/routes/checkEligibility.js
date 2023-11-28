import express from "express";
import { checkEligibility } from "../controllers/checkEligibility.js";

const router = express.Router();

router.route("/check-eligibility").post(checkEligibility);

export default router;
