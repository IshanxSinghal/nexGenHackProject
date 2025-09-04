const express = require("express");
const router = express.Router();

router.get("/hii", (req, res) => {
  res.send("Hii i am hospital route");
});
module.exports = router;
