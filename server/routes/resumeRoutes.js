const express = require("express");

const router = express.Router();

const multer = require("multer");

const Resume = require("../models/Resume");

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
            `http://localhost:5000/uploads/${req.file.filename}`,

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
                ? `http://localhost:5000/uploads/${req.file.filename}`
                : req.body.resumeFile,

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