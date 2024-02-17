import User from "../models/User.mjs";
import bcrypt from "bcryptjs";
export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "no user found" });
  }
  return res.status(200).json({ users });
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User alredy exists!" });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
    return console.log(err);
  }
  return res.status(200).json({ user });
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return res.status(500).json({ message: "Internal problem error" + err });
  }
  if (!existingUser) {
    res.status(400).json({ message: "USer not exist Error 404" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Password is incorrect!" });
  }
  res.status(200).json({ message: "Login into Your account successfully" });
};
