import express from "express";

import { getModelsGigachat } from "../controllers/gigachat.js";

import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/getmodels", isAuthenticated, getModelsGigachat);

export default router;
