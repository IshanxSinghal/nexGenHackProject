const express = require("express");
const router = express.Router();
const donarSchema = require("../models/donar");

router.post("/newDonar", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  const newDonar = new donarSchema(formData);

  const result = await newDonar.save();

  console.log(formData);

  res.send("Hii i am admin route");
});

module.exports = router;
