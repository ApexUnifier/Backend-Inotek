import schemas from "../../Models/index.js";
const { VacancySchema, CompanySchema } = schemas;

export const createVacancy = async (req, res) => {
  try {
    const newVacancy = new VacancySchema(req.body);
    await newVacancy.save();
    res.status(201).json({
      success: true,
      message: "Vacancy created successfully",
      vacancy: newVacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create vacancy",
      error: error.message,
    });
  }
};

export const deleteVacancy = async (req, res) => {
  try {
    const vacancyId = req.params.id;
    const deletedVacancy = await VacancySchema.findByIdAndDelete(vacancyId);
    if (!deletedVacancy) {
      return res.status(404).json({
        success: false,
        message: "VacancySchema not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Vacancy deleted successfully",
      vacancy: deletedVacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete vacancy",
      error: error.message,
    });
  }
};

export const filterVacancies = async (req, res) => {
  try {
    const { location, skillsRequired, companyName, jobType } = req.body;

    // Build the filter object based on the provided query parameters
    const filter = {};

    if (location) {
      filter.location = location;
    }

    if (skillsRequired) {
      filter.skillsRequired = skillsRequired;
    }

    if (companyName) {
      // Assuming the company name is stored in the "name" field of the "Company" model
      const company = await CompanySchema.findOne({ name: companyName });
      if (company) {
        filter.company = company._id;
      }
    }

    if (jobType) {
      filter.jobType = jobType;
    }

    // Query the vacancies collection with the filter object
    const vacancies = await VacancySchema.find(filter).populate("company");

    res.status(200).json({
      success: true,
      message: "Vacancies filtered successfully",
      vacancies: vacancies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to filter vacancies",
      error: error.message,
    });
  }
};
