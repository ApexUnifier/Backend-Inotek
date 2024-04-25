import express from "express";
const router = express.Router();
import { usersController } from "../../Controllers/index.js";

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/filter", usersController.filterUsers);
router.post("/update/:id", usersController.updateUser);
router.post("/filterusersbyrating", usersController.filterUsersByRating);
router.get("/:id", usersController.getUserById);

export default router;
