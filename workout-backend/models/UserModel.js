const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// create custom mongoose function - static sign up method
userSchema.statics.signup = async function (username, password) {
  //this = userSchema

  if (!username || !password) {
    throw Error("All fields must be filled");
  }
  const userNameExists = await this.findOne({ username });
  if (userNameExists) {
    throw Error("Username already in use");
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, password: hash });
  return user;
};

//static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ username });
  if (!user) {
    throw Error("Incorrect username or password");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect username or password");
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
