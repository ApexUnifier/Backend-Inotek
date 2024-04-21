import express from "express";
const router = express.Router();

import { companiesController } from "../../Controllers/index.js";

//#region Login

router.post("/login", companiesController.login);

//#endregion

//#region signup

router.post("/signup", companiesController.signup);

//#endregion

export default router;
