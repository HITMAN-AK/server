const mongoose = require("mongoose");
const upischema = mongoose.Schema;
const Upischema = new upischema({
  username: String,
  upiid: String,
  amount: { type: Number, default: 0 },
});
module.exports = mongoose.model("Upi", Upischema);