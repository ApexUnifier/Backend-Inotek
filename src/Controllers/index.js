import {
  login,
  signup,
  filterUsers,
  updateUser,
  filterUsersByRating,
} from "./UsersControllers/Post.js";
import { getUserById } from "./UsersControllers/Get.js";
import companiesController from "./CompaniesControllers/Post.js";
import {
  getAllVacancies,
  getAllVacanciesForCompany,
  getVacancyById,
} from "./VacancyControllers/Get.js";
import {
  createVacancy,
  deleteVacancy,
  filterVacancies,
} from "./VacancyControllers/Post.js";

export const usersController = {
  login,
  signup,
  filterUsers,
  updateUser,
  getUserById,
  filterUsersByRating,
};
export const vacancyController = {
  getAllVacancies,
  getAllVacanciesForCompany,
  getVacancyById,
  createVacancy,
  deleteVacancy,
  filterVacancies,
};
export { companiesController };
