import bcrypt from "bcrypt";
import schemas from "../../Models/index.js";
import { Jwt } from "../../Helpers/index.js";
import mongoose from "mongoose";

const { UserSchema } = schemas;

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password, phoneNo } = req.body;

    // Check if the user already exists
    const existingUser = await UserSchema.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserSchema({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
      phoneNo,
    });

    // Save the user to the database
    await newUser.save();

    const payload = {
      _id: newUser._id,
      name: newUser.name,
    };

    const access_Token = Jwt.signAccessToken(payload);

    const returnData = {
      _id: newUser._id,
      name: newUser.name,
      access_Token,
    };

    res
      .status(201)
      .json({ message: "User signup successfully", user: returnData });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const payload = {
      _id: user._id,
      name: user.name,
    };
    const access_Token = Jwt.signAccessToken(payload);

    const returnData = {
      _id: user._id,
      name: user.name,
      access_Token,
    };

    res.status(200).json({ message: "Login successful", user: returnData });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Verify JWT Token
export const verifyToken = async (token) => {
  try {
    const decoded = Jwt.verifyAccessToken(token);
    return decoded;
  } catch (error) {
    console.error("Error in verifying token:", error);
    return null;
  }
};

// Implement the POST method in the controller
export const filterUsers = async (req, res) => {
  try {
    const { skills } = req.body;

    // Build the filter object based on the provided query parameters
    const filter = {};

    if (skills) {
      filter.skills = skills;
    }

    // Query the vacancies collection with the filter object
    const users = await UserSchema.find(filter);

    res.status(200).json({
      success: true,
      message: "users filtered successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to filter users",
      error: error.message,
    });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, phoneNo, about, skills, ratingScore } =
      req.body;

    // Check if the user exists
    const user = await UserSchema.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash the new password if it is provided
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : user.password;

    // Update the user
    const updatedUser = await UserSchema.findByIdAndUpdate(
      id,
      {
        name: name || user.name,
        email: email || user.email,
        password: hashedPassword,
        phoneNo: phoneNo || user.phoneNo,
        about: about || user.about,
        skills: skills || user.skills,
        ratingScore: ratingScore || user.ratingScore,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error in updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const filterUsersByRating = async (req, res) => {
  try {
    const { ratingScore } = req.body;

    // Build the filter object based on the provided query parameters
    const filter = {};

    if (ratingScore) {
      filter.ratingScore = { $gt: ratingScore };
    }

    // Query the users collection with the filter object
    const users = await UserSchema.find(filter);

    res.status(200).json({
      success: true,
      message: "users filtered successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to filter users",
      error: error.message,
    });
  }
};
