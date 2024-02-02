const mongoose = require("mongoose");
const helpschema = mongoose.Schema;
const Helpschema = new helpschema({
  username: String,
  issues: String,
});
module.exports = mongoose.model("Help", Helpschema);
