const express = require("express");
const router = express.Router();
const hospitalSchema = require("../models/hospital");
const donarSchema = require("../models/donar");

router.get("/hii", (req, res) => {
  res.send("Hii i am hospital route");
});

router.post("/newHospital", async (req, res) => {
  console.log(req.body);

  const newHospital = new hospitalSchema(req.body);

  const data = await newHospital.save();

  res.json(data);
});

router.post("/hospitalLogin", async (req, res) => {
  console.log(req.body);

  const data = await hospitalSchema.findOne({
    hospitalId: req.body.hospitalId,
  });

  res.json(data);
});

router.post("/requestForBlood", async (req, res) => {
  console.log(req.body);

  try {
    // Find matching donors
    const matchingDonors = await donarSchema.find({
      bloodGroup: req.body.bloodGroup,
      location: req.body.hospitalLocation,
      availabilityStatus: true // Only available donors
    });

    console.log(`Found ${matchingDonors.length} matching donors`);

    // Return both request data and matching donors
    res.json({
      request: req.body,
      matchingDonors: matchingDonors,
      donorCount: matchingDonors.length
    });
  } catch (error) {
    console.error("Error finding donors:", error);
    res.status(500).json({ error: "Failed to find matching donors" });
  }
});

router.get("/giveHospital/:id", async (req, res) => {
  const hospital = await hospitalSchema.findOne({ hospitalId: req.params.id });

  res.json(hospital);
});

module.exports = router;
