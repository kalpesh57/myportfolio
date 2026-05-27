const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({

  name: {
    type: String,
    default: "Kalpesh Parmar",
  },

  image: {
    type: String,
    default: "",
  },

});

module.exports = mongoose.model(
  "Profile",
  ProfileSchema
);