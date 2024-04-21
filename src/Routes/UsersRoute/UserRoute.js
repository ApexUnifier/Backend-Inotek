import express from "express";
const router = express.Router();
import { usersController } from "../../Controllers/index.js";

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/filter", usersController.filterUsers);
router.post("/update", usersController.updateUser);
router.get("/:id", usersController.getUserById);

export default router;
