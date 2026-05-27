const express = require("express");

const router = express.Router();

const Hero = require("../models/Hero");

router.get("/", async (req, res) => {

  try {

    let hero = await Hero.findOne();

    if (!hero) {

      hero = new Hero();

      await hero.save();

    }

    res.status(200).json(hero);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

router.post("/", async (req, res) => {

  try {

    let hero = await Hero.findOne();

    if (!hero) {

      hero = new Hero(req.body);

    } else {

      hero.title =
        req.body.title;

      hero.subtitle =
        req.body.subtitle;

      hero.buttonText =
        req.body.buttonText;

    }

    await hero.save();

    res.status(200).json({
      message: "Hero Updated",
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

module.exports = router;