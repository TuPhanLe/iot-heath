const mongoose = require("mongoose");

const { Schema } = mongoose;

// create table users
const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role_id: {
      type: String,
      require: true,
    },
    googleId: {
      type: String,
      require: false,
    },
    accessToken: {
      type: String,
    },
    picture: {
      type: String,
    },
    idToken: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
