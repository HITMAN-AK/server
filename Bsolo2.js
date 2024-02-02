const mongoose = require("mongoose");
const bsolo2schema = mongoose.Schema;
const Bsolo2schema = new bsolo2schema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsolo2", Bsolo2schema);
