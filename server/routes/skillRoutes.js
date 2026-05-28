const express = require("express");

const router = express.Router();

const Skill = require("../models/Skill");

router.post("/", async (req, res) => {

  try {

    const skill =
      new Skill(req.body);

    await skill.save();

    res.status(201).json({
      message: "Skill Added",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.get("/", async (req, res) => {

  try {

    const skills =
      await Skill.find();

    res.status(200).json(
      skills
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const updatedSkill =
      await Skill.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(
      updatedSkill
    );

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Skill.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Skill Deleted",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;