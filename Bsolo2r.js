const mongoose = require("mongoose");
const bsolo2rschema = mongoose.Schema;
const Bsolo2rschema = new bsolo2rschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsolo2r", Bsolo2rschema);
