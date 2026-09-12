import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    //If user is already present , then compare it with the give email and password
    const foundUser = await UserModel.findOne({ email });
    if (!foundUser) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userid: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(201).json({
      msg: "singin successfull",
      token,
      user: {
        id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "something went wrong", error: error.message });
  }
};
