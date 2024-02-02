const mongoose = require("mongoose");
const fsolo1schema = mongoose.Schema;
const Fsolo1schema = new fsolo1schema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Fsolo1", Fsolo1schema);
