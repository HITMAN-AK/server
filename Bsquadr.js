const mongoose = require("mongoose");
const bsquadrschema = mongoose.Schema;
const Bsquadrschema = new bsquadrschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsquadr", Bsquadrschema);