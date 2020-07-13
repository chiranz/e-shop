const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

let stripe = require("stripe");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

stripe = stripe(process.env.STRIPE_SECRET);

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };
  stripe.charges.create(body, (err, success) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ success: success });
    }
  });
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Example app listening on port ${port}!`);
});
