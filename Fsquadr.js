const mongoose = require("mongoose");
const fsquadrschema = mongoose.Schema;
const Fsquadrschema = new fsquadrschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsquadr", Fsquadrschema);