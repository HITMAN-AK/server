const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51OXnenSC6UDJ5EILC5oPdUo4fWF5ZHd241sGX2Y9IX8ZqvrR5d0umL8Qawlgbn1UZcmvPSOQ7Aj9lvWU5nuhnWbf001GIl31ed"
);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use("/webhook", bodyParser.raw({ type: "application/json" }));
app.use(bodyParser.json());
const cors = require("cors");
const User = require("./User");
const Bsolo1 = require("./Bsolo1");
const Bsolo2 = require("./Bsolo2");
const Bsquad = require("./Bsquad");
const Fsolo1 = require("./Fsolo1");
const Fsolo2 = require("./Fsolo2");
const Fsquad = require("./Fsquad");
const Bsolo1r = require("./Bsolo1r");
const Bsolo2r = require("./Bsolo2r");
const Bsquadr = require("./Bsquadr");
const Fsolo1r = require("./Fsolo1r");
const Fsolo2r = require("./Fsolo2r");
const Fsquadr = require("./Fsquadr");
const Help = require("./Help");
const Upi = require("./Upi");
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);
app.post("/md", async (req, res) => {
  const bs1 = {
    type: "SOLO",
    map: "ERANGLE",
    date: "01/01/2004",
    time: "10:00 am",
    w: 100,
    r: 50,
    k: 5,
  };
  const bs2 = {
    type: "SOLO",
    map: "ERANGLE",
    date: "01/01/2004",
    time: "11:00 am",
    w: 100,
    r: 50,
    k: 5,
  };
  const bsd = {
    type: "SQUAD",
    map: "ERANGLE",
    date: "01/01/2004",
    time: "12:00 am",
    w: 50,
    r: 25,
    k: 5,
  };
  const fs1 = {
    type: "SOLO",
    map: "BERMUDA",
    date: "01/01/2004",
    time: "10:00 am",
    w: 120,
    r: 60,
    k: 10,
  };
  const fs2 = {
    type: "SOLO",
    map: "BERMUDA",
    date: "01/01/2004",
    time: "11:00 am",
    w: 120,
    r: 60,
    k: 10,
  };
  const fsd = {
    type: "SQUAD",
    map: "BERMUDA",
    date: "01/01/2004",
    time: "12:00 am",
    w: 50,
    r: 25,
    k: 10,
  };
  const bs1r = {
    name: "BGMI",
    type: "SOLO",
    map: "ERANGLE",
    date: "01/01/2003",
    time: "10:00 am",
    display: "flex",
  };
  const bs2r = {
    name: "BGMI",
    type: "SOLO",
    map: "ERANGLE",
    date: "01/01/2003",
    time: "11:00 am",
    display: "none",
  };
  const bsdr = {
    name: "BGMI",
    type: "SQUAD",
    map: "ERANGLE",
    date: "01/01/2003",
    time: "12:00 am",
    display: "none",
  };
  const fs1r = {
    name: "FREE FIRE",
    type: "SOLO",
    map: "BERMUDA",
    date: "01/01/2003",
    time: "10:00 am",
    display: "none",
  };
  const fs2r = {
    name: "FREE FIRE",
    type: "SOLO",
    map: "BERMUDA",
    date: "01/01/2003",
    time: "11:00 am",
    display: "none",
  };
  const fsdr = {
    name: "FREE FIRE",
    type: "SQUAD",
    map: "BERMUDA",
    date: "01/01/2003",
    time: "12:00 am",
    display: "flex",
  };
  res.json({
    bs1: [bs1.type, bs1.map, bs1.date, bs1.time, bs1.w, bs1.r, bs1.k],
    bs2: [bs2.type, bs2.map, bs2.date, bs2.time, bs2.w, bs2.r, bs2.k],
    bsd: [bsd.type, bsd.map, bsd.date, bsd.time, bsd.w, bsd.r, bsd.k],
    fs1: [fs1.type, fs1.map, fs1.date, fs1.time, fs1.w, fs1.r, fs1.k],
    fs2: [fs2.type, fs2.map, fs2.date, fs2.time, fs2.w, fs2.r, fs2.k],
    fsd: [fsd.type, fsd.map, fsd.date, fsd.time, fsd.w, fsd.r, fsd.k],
    bs1r: [bs1r.name, bs1r.type, bs1r.map, bs1r.date, bs1r.time, bs1r.display],
    bs2r: [bs2r.name, bs2r.type, bs2r.map, bs2r.date, bs2r.time, bs2r.display],
    bsdr: [bsdr.name, bsdr.type, bsdr.map, bsdr.date, bsdr.time, bsdr.display],
    fs1r: [fs1r.name, fs1r.type, fs1r.map, fs1r.date, fs1r.time, fs1r.display],
    fs2r: [fs2r.name, fs2r.type, fs2r.map, fs2r.date, fs2r.time, fs2r.display],
    fsdr: [fsdr.name, fsdr.type, fsdr.map, fsdr.date, fsdr.time, fsdr.display],
  });
});
app.use(express.json());
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://legendaryairforce:ASHWIN01012004@log.ukli1gy.mongodb.net/clientdata"
  );
}
app.post("/cnp", async (req, res) => {
  const password = req.body.pass;
  const pass = await User.where({ username: req.body.username }).select(
    "password"
  );
  try {
    await User.updateOne({ _id: pass }, { password: password }).then(
      res.json({ status: "sc" })
    );
  } catch {
    res.json({ status: "f" });
  }
});
app.post("/foruc", async (req, res) => {
  const username = await User.exists({ username: req.body.username });
  if (username !== null) {
    const ph = await User.where({ username: req.body.username }).select(
      "phonenumber"
    );
    const pn = ph[0].phonenumber;
    console.log(ph[0].phonenumber);
    res.json({ status: "sc", phone: pn });
  } else {
    res.json({ status: "fl" });
  }
});
app.post("/helpline", async (req, res) => {
  const username = req.body.username;
  const issues = req.body.issues;
  const help = await new Help({
    username: username,
    issues: issues,
  });
  help.save().then(() => {
    console.log("issuses saved");
  });
  res.json({ status: "sc" });
});
app.post("/coin", async (req, res) => {
  if (req.body.username !== null) {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    const amnt = balance[0].amount;
    res.json({ amount: amnt });
  }
});
app.post("/wd", async (req, res) => {
  const balance = await User.where({ username: req.body.username }).select(
    "amount"
  );
  const amount = req.body.amount;
  const upiid = req.body.upiid;
  if (amount <= balance[0].amount) {
    const upi = new Upi({
      username: req.body.username,
      upiid: upiid,
      amount: amount,
    });
    upi.save().then(console.log("upi created"));
    let x = balance[0].amount;
    x -= amount;
    const amnt = await User.where({ username: req.body.username }).select(
      "amount"
    );
    await User.updateOne({ _id: amnt }, { amount: x });
    const u = await User.where({ username: req.body.username }).select("upi");
    await User.updateOne({ _id: u }, { upi: upiid });
    res.json({ status: "sc" });
  } else {
    res.json({ status: "ib" });
  }
});
app.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const payload = req.body;
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      "whsec_Z9tMH2pQRwWoBHw8vf8fJH2L3adO9eq4"
    );
  } catch (err) {
    console.error(err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const amount = session.amount_total / 100;
    const { metadata } = session;
    const username = metadata.username;
    const balance = await User.where({ username: username }).select("amount");
    let x = balance[0].amount;
    tot = x + amount;
    await User.updateOne({ _id: balance }, { amount: tot });
  }
  res.status(200).end();
});
app.post("/payment", async (req, res) => {
  const amount = req.body.amount;
  const username = req.body.username;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr", // Change currency to INR
            product_data: {
              name: username,
            },
            unit_amount: amount * 100, // Amount in paisa (1000 INR = 100000 paisa)
          },
          quantity: 1,
        },
      ],
      metadata: {
        username: username, // Add username to metadata
      },
      mode: "payment",
      success_url: "https://gaminghub.vercel.app/home",
      cancel_url: "https://gaminghub.vercel.app/deposit",
    });
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});
app.get("/bs1r", async (req, res) => {
  const bsolo1 = await Bsolo1r.find().sort({ position: 1 });
  console.log(bsolo1);
  res.json({ bsolo1 });
});
app.get("/bs2r", async (req, res) => {
  const bsolo2 = await Bsolo2r.find().sort({ position: 1 });
  console.log(bsolo2);
  res.json({ bsolo2 });
});
app.get("/bsdr", async (req, res) => {
  const bsquad = await Bsquadr.find().sort({ position: 1 });
  console.log(bsquad);
  res.json({ bsquad });
});
app.get("/fs1r", async (req, res) => {
  const fsolo1 = await Fsolo1r.find().sort({ position: 1 });
  console.log(fsolo1);
  res.json({ fsolo1 });
});
app.get("/fs2r", async (req, res) => {
  const fsolo2 = await Fsolo2r.find().sort({ position: 1 });
  console.log(fsolo2);
  res.json({ fsolo2 });
});
app.get("/fsdr", async (req, res) => {
  const fsquad = await Fsquadr.find().sort({ position: 1 });
  console.log(fsquad);
  res.json({ fsquad });
});
app.post("/um", async (req, res) => {
  const bsolo1 = await Bsolo1.exists({ username: req.body.username });
  const bsolo2 = await Bsolo2.exists({ username: req.body.username });
  const bsquad = await Bsquad.exists({ username: req.body.username });
  const bsc1 = await Bsolo1.countDocuments({});
  const bsc2 = await Bsolo2.countDocuments({});
  const bsdc = await Bsquad.countDocuments({});
  const fsolo1 = await Fsolo1.exists({ username: req.body.username });
  const fsolo2 = await Fsolo2.exists({ username: req.body.username });
  const fsquad = await Fsquad.exists({ username: req.body.username });
  const fsc1 = await Fsolo1.countDocuments({});
  const fsc2 = await Fsolo2.countDocuments({});
  const fsdc = await Fsquad.countDocuments({});
  let bs1e = "na";
  let bs2e = "na";
  let bsde = "na";
  let fs1e = "na";
  let fs2e = "na";
  let fsde = "na";
  if (bsolo1 !== null) {
    bs1e = "av";
  }
  if (bsolo2 !== null) {
    bs2e = "av";
  }
  if (bsquad !== null) {
    bsde = "av";
  }
  if (fsolo1 !== null) {
    fs1e = "av";
  }
  if (fsolo2 !== null) {
    fs2e = "av";
  }
  if (fsquad !== null) {
    fsde = "av";
  }
  res.json({
    bsolo1: bs1e,
    bsolo2: bs2e,
    bsquad: bsde,
    fsolo1: fs1e,
    fsolo2: fs2e,
    fsquad: fsde,
    count: [bsc1, bsc2, bsdc, fsc1, fsc2, fsdc],
  });
});
app.post("/bjstatus", async (req, res) => {
  const bsolo1 = await Bsolo1.exists({ username: req.body.username });
  const bsolo2 = await Bsolo2.exists({ username: req.body.username });
  const bsquad = await Bsquad.exists({ username: req.body.username });
  const bsc1 = await Bsolo1.countDocuments({});
  const bsc2 = await Bsolo2.countDocuments({});
  const bsdc = await Bsquad.countDocuments({});
  console.log(bsc1);
  let bs1e = "na";
  let bs2e = "na";
  let bsde = "na";
  if (bsolo1 !== null) {
    bs1e = "av";
  }
  if (bsolo2 !== null) {
    bs2e = "av";
  }
  if (bsquad !== null) {
    bsde = "av";
  }
  res.json({
    bsolo1: bs1e,
    bsolo2: bs2e,
    bsquad: bsde,
    count: [bsc1, bsc2, bsdc],
  });
});
app.post("/fjstatus", async (req, res) => {
  const fsolo1 = await Fsolo1.exists({ username: req.body.username });
  const fsolo2 = await Fsolo2.exists({ username: req.body.username });
  const fsquad = await Fsquad.exists({ username: req.body.username });
  const fsc1 = await Fsolo1.countDocuments({});
  const fsc2 = await Fsolo2.countDocuments({});
  const fsdc = await Fsquad.countDocuments({});
  console.log(fsc1);
  let bs1e = "na";
  let bs2e = "na";
  let bsde = "na";
  if (fsolo1 !== null) {
    bs1e = "av";
  }
  if (fsolo2 !== null) {
    bs2e = "av";
  }
  if (fsquad !== null) {
    bsde = "av";
  }
  res.json({
    fsolo1: bs1e,
    fsolo2: bs2e,
    fsquad: bsde,
    count: [fsc1, fsc2, fsdc],
  });
});
app.post("/pr", async (req, res) => {
  const ud = await User.where({ username: req.body.un }).exists({
    uuid: req.body.ud,
  });
  if (ud !== null) {
    res.json({ per: "ac" });
  } else {
    res.json({ per: "dn" });
  }
});
app.post("/login", async (req, res) => {
  const luname = await User.exists({ username: req.body.luname });
  const lpass = await User.where({ username: req.body.luname }).findOne({
    password: req.body.lpass,
  });
  console.log(lpass);
  console.log(req.body.lpass);
  if (luname !== null) {
    if (lpass !== null) {
      const x = Math.floor(Math.random() * 10000000000);
      console.log(x);
      const uuid = await User.where({ username: req.body.luname }).select(
        "uuid"
      );
      await User.updateOne({ _id: uuid }, { uuid: x });
      res.json({ name: "bc", uuid: x });
      res.end();
    } else {
      res.json({ name: "ip" });
      res.end();
    }
  } else {
    if (lpass !== null) {
      res.json({ name: "iu" });
      res.end();
    } else {
      res.json({ name: "bic" });
      res.end();
    }
  }
});
app.post("/cu", async (req, res) => {
  const username = await User.exists({ username: req.body.suname });
  if (username !== null) {
    res.send("na");
    res.end();
  } else {
    res.send("a");
    res.end();
  }
});
app.post("/signup", async (req, res) => {
  const suname = await User.exists({ username: req.body.suname });
  const sphone = await User.exists({ phonenumber: req.body.sphone });
  console.log(suname);
  if (suname !== null) {
    if (sphone !== null) {
      console.log("both username and phonenumber is already exist");
      res.send("up");
    } else {
      res.send("u");
    }
  } else if (sphone !== null) {
    res.send("p");
  } else {
    console.log("permit");
    const uid = Math.floor(Math.random() * 10000000000);
    const user = new User({
      username: req.body.suname,
      password: req.body.spass,
      phonenumber: req.body.sphone,
      uuid: uid,
    });
    user
      .save()
      .then(() => {
        console.log("user saved");
      })
      .then(res.send("permit"));
  }
});
app.post("/bsolo1", async (req, res) => {
  const user = await Bsolo1.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 10) {
      let x = balance[0].amount;
      x = x - 10;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      await User.updateOne({ _id: amount }, { amount: x });
      const bsolo1 = await new Bsolo1({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      bsolo1.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.post("/bsolo2", async (req, res) => {
  const user = await Bsolo2.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 10) {
      let x = balance[0].amount;
      x = x - 10;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      await User.updateOne({ _id: amount }, { amount: x });
      const bsolo2 = await new Bsolo2({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      bsolo2.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.post("/bsquad", async (req, res) => {
  const user = await Bsquad.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 10) {
      let x = balance[0].amount;
      x = x - 10;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      await User.updateOne({ _id: amount }, { amount: x });
      const bsquad = await new Bsquad({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      bsquad.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.post("/fsolo1", async (req, res) => {
  const user = await Fsolo1.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 20) {
      let x = balance[0].amount;
      x = x - 20;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      await User.updateOne({ _id: amount }, { amount: x });
      const fsolo1 = await new Fsolo1({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      fsolo1.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.post("/fsolo2", async (req, res) => {
  const user = await Fsolo2.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 20) {
      let x = balance[0].amount;
      x = x - 20;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      console.log(req.body.gameid);
      await User.updateOne({ _id: amount }, { amount: x });
      const fsolo2 = await new Fsolo2({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      fsolo2.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.post("/fsquad", async (req, res) => {
  const user = await Fsquad.exists({ username: req.body.username });
  const phone = await User.where({ username: req.body.username }).select(
    "phonenumber"
  );
  if (user !== null) {
    res.json({ status: "ae" });
  } else {
    const balance = await User.where({ username: req.body.username }).select(
      "amount"
    );
    console.log(balance[0].amount);
    if (balance[0].amount >= 20) {
      let x = balance[0].amount;
      x = x - 20;
      const amount = await User.where({ username: req.body.username }).select(
        "amount"
      );
      await User.updateOne({ _id: amount }, { amount: x });
      const fsquad = await new Fsquad({
        username: req.body.username,
        gamename: req.body.gamename,
        gameid: req.body.gameid,
        phonenumber: phone[0].phonenumber,
      });
      fsquad.save().then(res.json({ ws: "success" }));
    } else {
      res.json({ ws: "failed" });
    }
  }
});
app.listen(4000, "0.0.0.0", () => console.log("server is on port 4000"));
