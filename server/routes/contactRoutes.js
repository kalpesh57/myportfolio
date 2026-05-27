const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message Saved",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});
router.get("/", async (req, res) => {

  try {

    const messages =
      await Contact.find();

    res.status(200).json(messages);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.delete("/:id", async (req, res) => {

  try {

    await Contact.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Message Deleted",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;