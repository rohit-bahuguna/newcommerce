const userModal = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config();

const singUp = async (req, res) => {
  // Exitsting user
  //Hash password
  // User creation
  //Token creation

  const { username, email, password } = req.body;
  try {
    const ExitstingUser = await userModal.findOne({ email: email });
    if (ExitstingUser) {
      return res.status(400).json({ massage: "User already Exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await userModal.create({
      username: username,
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },process.env.SECRET_KEY);

    res.status(200).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

const singIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const ExitstingUser = await userModal.findOne({ email: email });

    if (!ExitstingUser) {
      return res.status(404).json({ massage: "user not found" });
    }
    const matchPassword = await bcrypt.compare(
      password,
      ExitstingUser.password
    );

    if (!matchPassword) {
      return res.status(400).json({ massage: "Invalid UserName/Password" });
    }
    const token = jwt.sign(
      { email: ExitstingUser.email, id: ExitstingUser._id },process.env.SECRET_KEY);
    
    res.status(200).json({ user: ExitstingUser, token: token });
  } catch (error) {
   
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
};

module.exports = { singIn, singUp };
