const mongoose = require("mongoose");

const employmongoose = new mongoose.Schema({
  name: {
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

  gender :{
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  password2: {
    type: String,
    required: true,
  },
});

const register = mongoose.model("Register", employmongoose);

module.exports = register;
