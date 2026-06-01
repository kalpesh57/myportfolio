const express = require("express");

const router = express.Router();

const Project = require("../models/Project");
const multer = require("multer");

const {
  storage,
} = require("../config/cloudinary");

const upload = multer({
  storage,
});



router.post(
  "/",
  upload.single("image"),
  async (req, res) => {

    try {

      const project =
        new Project({

          title: req.body.title,

          description: req.body.description,

          tech: req.body.tech,

          github: req.body.github,

          live: req.body.live,

          image: req.file
            ? req.file.path
            : "",

        });

      await project.save();

      res.status(201).json({
        message: "Project Added",
      });

    } catch (error) {

      res.status(500).json({
        error: error.message,
      });

    }
  });

router.get("/", async (req, res) => {

  try {

    const projects =
      await Project.find();

    res.status(200).json(
      projects
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const updatedProject =
      await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(
      updatedProject
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Project.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Project Deleted",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;