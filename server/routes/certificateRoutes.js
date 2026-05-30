const express = require("express");

const router = express.Router();

const Certificate =
  require("../models/Certificate");
const multer = require("multer");

const storage = multer.diskStorage({

  destination: (req, file, cb) => {


    cb(null, "uploads/");


  },

  filename: (req, file, cb) => {


    cb(
      null,
      Date.now() +
      "-" +
      file.originalname
    );


  },

});

const upload = multer({
  storage,
});

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    try {

      const certificate =
        new Certificate({

          title:
            req.body.title,

          organization:
            req.body.organization,

          issueDate:
            req.body.issueDate,

          image:
            req.file
              ? "http://localhost:5000/uploads/" +
              req.file.filename
              : "",

        });

      await certificate.save();

      res.status(201).json({
        message: "Certificate Added",
      });

    } catch (error) {

      console.log("CERTIFICATE ERROR:");
      console.log(error);

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

router.put(
  "/:id",
  upload.single("image"),
  async (req, res) => {

    try {

      const updatedCertificate =
        await Certificate.findByIdAndUpdate(
          req.params.id,

          {
            title:
              req.body.title,

            organization:
              req.body.organization,

            issueDate:
              req.body.issueDate,

            image:
              req.file
                ? "http://localhost:5000/uploads/" +
                req.file.filename
                : req.body.image,
          },

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