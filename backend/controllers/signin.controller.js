export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    res.status(201).json({ msg: "singin successfull" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong", error: error.message });
  }
};
