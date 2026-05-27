const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const Profile = require("../models/Profile");

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );

  },

});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("image"),

  async (req, res) => {

    try {

      let profile = await Profile.findOne();

      if (!profile) {

        profile = new Profile();

      }

      profile.name = req.body.name;

      if (req.file) {

        profile.image =
          `http://localhost:5000/uploads/${req.file.filename}`;

      }

      await profile.save();

      res.status(200).json({
        success: true,
        profile,
      });

    } catch (error) {

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

router.get("/", async (req, res) => {

  try {

    const profile = await Profile.findOne();

    res.status(200).json(profile);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;