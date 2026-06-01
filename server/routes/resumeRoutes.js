const express = require("express");

const router = express.Router();


const Resume = require("../models/Resume");


const multer = require("multer");
const {
  storage,
} = require("../config/cloudinary");

const upload = multer({
  storage,
});

router.get(
  "/",
  async (req, res) => {

    try {

      const resume =
        await Resume.findOne();

      res.json(resume);

    } catch (error) {

      res.status(500).json(error);

    }

  }
);

router.post(
  "/",
  upload.single("resume"),
  async (req, res) => {

    try {

      const resume =
        new Resume({

          title:
            req.body.title,

          resumeFile:
            req.file.path,

          fileName:
            req.file.originalname,

        });

      await resume.save();

      res.json(resume);

    } catch (error) {


      res.status(500).json(error);

    }

  }
);

router.put(
  "/:id",
  upload.single("resume"),
  async (req, res) => {

    try {

      const updated =
        await Resume.findByIdAndUpdate(

          req.params.id,

          {

            title:
              req.body.title,

            resumeFile:
              req.file
                ? req.file.path
                : req.body.resumeFile,

            fileName:
              req.file
                ? req.file.originalname
                : req.body.fileName,

          },

          {
            new: true,
          }

        );

      res.json(updated);

    } catch (error) {

      res.status(500).json(error);

    }

  }
);

router.delete(
  "/:id",
  async (req, res) => {

    try {

      await Resume.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Resume Deleted",
      });

    } catch (error) {

      res.status(500).json(error);

    }

  }
);

module.exports =
  router;