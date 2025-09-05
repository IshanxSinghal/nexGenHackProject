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

  const data = await donarSchema.find({
    bloodGroup: req.body.bloodGroup,
    location: req.body.hospitalLocation,
  });

  console.log(data);

  res.json(req.body);
});
router.post("/hospitalLogin", async (req, res) => {
  console.log(req.body);

  const data = await hospitalSchema.findOne({
    hospitalId: req.body.hospitalId,
  });

  res.json(data);
});

router.get("/giveHospital/:id", async (req, res) => {
  const hospital = await hospitalSchema.findOne({ hospitalId: req.params.id });

  res.json(hospital);
});

module.exports = router;
