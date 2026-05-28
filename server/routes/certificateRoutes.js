const express = require("express");

const router = express.Router();

const Certificate =
  require("../models/Certificate");

router.post("/", async (req, res) => {

  try {

    const certificate =
      new Certificate(req.body);

    await certificate.save();

    res.status(201).json({
      message: "Certificate Added",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const certificates =
      await Certificate.find();

    res.status(200).json(
      certificates
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const updatedCertificate =
      await Certificate.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(
      updatedCertificate
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Certificate.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message:
        "Certificate Deleted",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;