import UserModel from "../models/user";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(username);
    // console.log(email);
    // console.log(password);

    // First check whether the user is already present or not
    const foundUser = await UserModel.find({ email });
    console.log("User found", foundUser);

    // If user is not present add that user in the data base
    //But before adding into the database hash the password.
    UserModel.create({ username, email, password });

    res.status(201).json({ msg: "SignUp successfull" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Something went wrong!", error: error.message });
  }
};
