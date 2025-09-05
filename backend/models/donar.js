require("dotenv").config();

const { Schema, mongoose } = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("database successfully connected Local");
  })
  .catch((err) => {
    console.log(err);
  });

const donarSchema = mongoose.Schema({
  donarId: Number,
  donarPassword: String,
  name: String,
  age: Number,
  bloodGroup: String,
  location: String,
  phoneNo: Number,
  availabilityStatus: Boolean,
  donorHistory: Array,
});

module.exports = mongoose.model("Donar", donarSchema);
