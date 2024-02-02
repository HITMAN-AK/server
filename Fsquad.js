const mongoose = require("mongoose");
const fsquadschema = mongoose.Schema;
const Fsquadschema = new fsquadschema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsquad", Fsquadschema);
