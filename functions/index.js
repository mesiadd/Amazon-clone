

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NZvP2JdtNr8s3QfvuhdVpXvWKqi0Uykld6yFoQrrsN1ECewHMhmwZa7VooOKpmELS5XcLxm3rncgcMCvKHQLkYe00PoryMaCs"
);

// - App config
const app = express();

// - Middlwares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen commands
exports.api = functions.https.onRequest(app);