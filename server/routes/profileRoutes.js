const express = require("express");



const router = express.Router();

const Profile = require("../models/Profile");
const multer = require("multer");
const {
  storage,
} = require("../config/cloudinary");

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
          req.file.path;

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