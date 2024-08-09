const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login
router.post("/login", async (req, res) => {
  res.json({ message: "login!" });
});

//signup
router.post("/signup", async (req, res) => {
  //   res.json({ message: "signup!" });
  const { username, password } = req.body;
  try {
    const user = await User.signup(username, password);
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
