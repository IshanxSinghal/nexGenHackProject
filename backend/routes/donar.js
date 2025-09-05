const express = require("express");
const router = express.Router();
const donarSchema = require("../models/donar");

router.post("/newDonar", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    
    const newDonar = new donarSchema(formData);
    const result = await newDonar.save();

    console.log("Donor saved successfully:", result);

    res.json({
      success: true,
      message: "Donor registered successfully",
      donor: result
    });
  } catch (error) {
    console.error("Error saving donor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to register donor",
      error: error.message
    });
  }
});

module.exports = router;
