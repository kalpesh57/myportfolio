const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({

  title: {
    type: String,
    default: "I Am Full Stack Developer",
  },

  subtitle: {
    type: String,
    default: "Modern Web Experiences",
  },

  buttonText: {
    type: String,
    default: "View Projects",
  },

});

module.exports = mongoose.model(
  "Hero",
  HeroSchema
);