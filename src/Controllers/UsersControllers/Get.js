import mongoose from "mongoose";
import schemas from "../../Models/index.js";

const { UserSchema } = schemas;

// getUserById controller
export const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserSchema.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Error finding user",
      error: err,
    });
  }
};
