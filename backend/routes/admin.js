const express = require("express");
const router = express.Router();

router.get("/hii", (req, res) => {
  res.send("Hii i am admin route");
});

module.exports = router;
