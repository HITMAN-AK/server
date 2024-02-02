const mongoose = require("mongoose");
const bsquadschema = mongoose.Schema;
const Bsquadschema = new bsquadschema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsquad", Bsquadschema);
