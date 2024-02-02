const mongoose = require("mongoose");
const fsolo1rschema = mongoose.Schema;
const Fsolo1rschema = new fsolo1rschema({
  username: String,
  gamename: String,
  gameid: String,
  position: { type: Number, default: 0 },
  kills: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsolo1r", Fsolo1rschema);