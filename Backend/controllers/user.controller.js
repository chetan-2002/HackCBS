const User = require("../models/user.model");
const generateToken = require("../config/generateToken");
const Token = require("../models/token.model");
//desc: login user
//route: POST http://localhost:5000/api/user/login
//access: public
const loginUser = async (req, res) => {
  const { userEmail: email } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  if (user) {
    res.json({
      user,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ err: "This email doesnt exist." });
  }
};

//desc: register user
//route: POST http://localhost:5000/api/user/register
//access: public
const registerUser = async (req, res) => {
  const userData = req.body;
  const userExists = await User.findOne({ email: userData.email });

  if (userExists) {
    res.status(400).json({ err: "User already exists" });
    return;
  }

  const user = await User.create(userData);
  const generatedToken = generateToken(user._id);
  await Token.create({
    email: user.email,
    token: generatedToken,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      token: generatedToken,
    });
  } else {
    res.status(400).json({ err: "Invalid user data" });
  }
};

module.exports = {
  loginUser,
  registerUser,
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWNiMWM3ODdkYzgxOTI4ODAyMzZkOCIsImlhdCI6MTY2NzAxOTIwNywiZXhwIjoxNjY5NjExMjA3fQ.1nGTdoU59rwW3S8Zy1w93EQ3Xg5MvWECLI5rKSjYehI
