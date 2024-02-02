const mongoose = require("mongoose");
const fsolo2rschema = mongoose.Schema;
const Fsolo2rschema = new fsolo2rschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsolo2r", Fsolo2rschema);