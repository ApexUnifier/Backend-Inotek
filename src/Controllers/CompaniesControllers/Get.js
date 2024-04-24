import schemas from "../../Models/index.js";
const { CompanySchema } = schemas;

// Get All Companies
export const getAllCompanies = async (req, res) => {
  try {
    // Retrieve all companies from the database
    const companies = await CompanySchema.find();

    // Return the list of companies
    res.status(200).json({
      companies: companies,
    });
  } catch (error) {
    console.error("Error in retrieving companies:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Companies
export const updateLogo = async () => {
  try {
    // Retrieve all companies from the database
    const companies = await CompanySchema.find();

    // Update the logos sequentially
    const logos = [
      "https://1000logos.net/wp-content/uploads/2017/08/Detroit-Lions-Logo.png",
      "https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png",
      "https://1000logos.net/wp-content/uploads/2024/04/PurpleBricks-Logo.png",
      "https://1000logos.net/wp-content/uploads/2024/04/Dodge-Hellcat-Logo.png",
      "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
      "https://1000logos.net/wp-content/uploads/2019/06/Tiktok_Logo.png",
    ];

    for (let i = 0; i < companies.length; i++) {
      const company = companies[i];
      const logo = logos[i % logos.length];

      // Update the logo of the company
      const updatedCompany = await CompanySchema.findByIdAndUpdate(
        company._id,
        {
          logo: logo,
          name: "test",
          yearOfEstablishment: company.yearOfEstablishment || 2020,
          password: company.password || "WEASRVF",
          email: company.email || "test@gmail.com",
          name: company.name || "",
          fieldsOfWork: company.fieldsOfWork || [""],
        },
        { new: true }
      );

      await updatedCompany.save();
    }

    // Return the list of companies with updated logos
    return {
      companies: companies,
    };
  } catch (error) {
    console.error("Error in updating logos:", error);
    return { error: "Server error" };
  }
};
