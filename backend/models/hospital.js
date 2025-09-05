require("dotenv").config();

const { Schema, mongoose } = require("mongoose");

const hospitalSchema = mongoose.Schema({
  hospitalId: Number,
  hospitalPassword: String,
  name: String,
  location: String,
  phoneNo: Number,
  email: String,
  bloodBankName: String,
  donorHistory: Array,
});

module.exports = mongoose.model("Hospital", hospitalSchema);
