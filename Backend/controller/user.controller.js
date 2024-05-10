import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullName,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(200).json({
      message: "user created sucessfully",
      user: {
        _id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isMatch = await (user
      ? bcryptjs.compare(password, user.password)
      : false);

    if (!user || !isMatch) {
      return res.status(400).json({ message: " invalid username or password" });
    } else {
      res.status(200).json({
        message: "login successfull",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
