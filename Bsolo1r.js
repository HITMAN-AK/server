const mongoose = require("mongoose");
const bsolo1rschema = mongoose.Schema;
const Bsolo1rschema = new bsolo1rschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsolo1r", Bsolo1rschema);
