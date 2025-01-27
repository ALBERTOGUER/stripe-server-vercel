const express = require("express");
var cors = require('cors')
const app = express();
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

app.use(cors())
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/products", (req, res) => {
  res.json({
    succes: true,
    data: [
      {
        id: 1,

      }
    ]

  }
  )
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });

});


app.listen(process.env.PORT || 3000, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
