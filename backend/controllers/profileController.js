import UserModel from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const userProfile = await UserModel.findById(userId).select("-password");

    if (!userProfile) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({ msg: "This is your user", userProfile });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
