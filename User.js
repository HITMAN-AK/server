const mongoose = require("mongoose");
const userschema = mongoose.Schema;
const Userschema = new userschema({
  username: String,
  password: String,
  phonenumber: { type: Number },
  amount: { type: Number, default: 0 },
  uuid: { type: Number, default: 0 },
  upi: { type: String, default: "123456789@paytm" },
});
module.exports = mongoose.model("User", Userschema);
