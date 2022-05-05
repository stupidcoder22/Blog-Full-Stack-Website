import User from "../models/User";
import bcrypt from "bcrypt";

export const getAllusers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "No User Found", val: false });
  }
  return res.status(200).json({ users, val: true });
};

export const signup = async (req, res, next) => {
  let existinguser;
  const { name, email, password } = req.body;
  try {
    existinguser = await User.findOne({ email });
    console.log(existinguser);
  } catch (error) {
    return console.log(error);
  }
  if (existinguser) {
    return res.status(400).json({ message: "User Already Exist", val: false });
  }

  const securepassword = await bcrypt.hash(password, 10);

  const signupdata = await User({
    name,
    email,
    password: securepassword,
    blogs: [],
  });
  await signupdata.save();
  return res.status(200).json({ signupdata, val: true });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailCheck = await User.findOne({ email });

    if (emailCheck == null) {
      return res
        .status(404)
        .json({ message: "This email doesn't exist", val: false });
    }

    const passcheck = await bcrypt.compare(password, emailCheck.password);
    if (!passcheck) {
      res.status(401).json({ message: "Password is wrong", val: false });
    }
    return res.send({ message: "Login is Successful", emailCheck, val: true });
  } catch (error) {
    return res.status(500).json({ message: "some random error" });
  }
};
