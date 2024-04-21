import express from "express";
import userRoutes from "./UsersRoute/UserRoute.js";
import companyRoutes from "./CompaniesRoutes/CompanyRoute.js";
import vacancyRoutes from "./VacancyRoutes/VacancyRoutes.js";

const router = express.Router();

// Define routes
router.use("/user", userRoutes);
router.use("/company", companyRoutes);
router.use("/vacancy", vacancyRoutes);

export default router;
