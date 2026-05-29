const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

  title: {
    type: String,
    default: "My Resume",
  },

  resumeFile: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports =
  mongoose.model(
    "Resume",
    resumeSchema
  );