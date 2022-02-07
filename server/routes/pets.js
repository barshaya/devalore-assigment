const Pet = require("../models/pet");
const express = require("express");
const router = express.Router();

//add pet
router.post("/pet", async (req, res) => {
  try {
    const pet = await new Pet(req.body);
    if (pet.name.length > 25) return;
    if (pet.age < 0) return;

    await pet.save();
    res.send({
      success: true,
    });
  } catch (error) {
    res.send(error);
  }
});

//get all pets
router.route("/pets").get(async (req, res) => {
  try {
    const pets = await Pet.find();
    res.send(pets);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
