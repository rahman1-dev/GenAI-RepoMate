import UserModel from "../models/User.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields!" });
    }

    // First check whether the user is already present or not
    const foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      console.log("User found", foundUser);
      return res.json({ msg: "Email already registered" });
    }

    // If user is not present add that user in the data base
    //But before adding into the database hash the password.

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: "SignUp successfull",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Something went wrong!", error: error.message });
  }
};
