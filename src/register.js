const mongoose = require("mongoose");

const employmongoose = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  firstName: {
    type: Number,
    required: true,
  },

  phoneNo: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },
});

const register = mongoose.model("Register", employmongoose);

module.exports = register;
