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

  fileName: {
    type: String,
    default: "",
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);