import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
    },
    about: {
      type: String,
    },
    skills: {
      type: [String],
    },
    ratingScore: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
