const mongoose = require("mongoose");

const CertificateSchema =
  new mongoose.Schema({

    title: {
      type: String,
      required: true,
    },

    organization: {
      type: String,
      required: true,
    },

    issueDate: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

  });

module.exports =
  mongoose.model(
    "Certificate",
    CertificateSchema
  );