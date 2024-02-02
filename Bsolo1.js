const mongoose = require("mongoose");
const bsolo1schema = mongoose.Schema;
const Bsolo1schema = new bsolo1schema({
  username: String,
  gamename: String,
  gameid: String,
  phonenumber: { type: Number, default: 0 },
});
module.exports = mongoose.model("Bsolo1", Bsolo1schema);
