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
  name: String,
  phoneNo: Number,
  bloodGroup: String,
  location: String,
  donorHistory: Array,
});

module.exports = mongoose.model("Donar", donarSchema);
