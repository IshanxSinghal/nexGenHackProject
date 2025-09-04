const express = require("express");
const app = express();
const cors = require("cors");
const adminRoutes = require("./routes/admin");
const donarRoutes = require("./routes/donar");
const hospitalRoutes = require("./routes/hospital");

const donarSchema = require("./models/donar");
const hospitalSchema = require("./models/hospital");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json()); // for body parser

app.get("/", (req, res) => {
  res.send("Hiii i am 8000");
});

app.use("/admin", adminRoutes);
app.use("/donar", donarRoutes);
app.use("/hospital", hospitalRoutes);

app.all("/", (req, res) => {
  res.send("Page not found");
});

app.listen(8000, () => {
  console.log("Backend  running on 8000");
});
