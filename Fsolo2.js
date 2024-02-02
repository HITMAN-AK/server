const mongoose = require("mongoose");
const fsolo2schema = mongoose.Schema;
const Fsolo2schema = new fsolo2schema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsolo2", Fsolo2schema);
