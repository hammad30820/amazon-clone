const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51J3yaXSB2qYygCTo56tWmBD68TM6MmwBdXN7QOTt8Gwhwa3KHNOqM03KBN2afXYGraiv4XegORwcKteqVcmXDPTV00q0chTSz5")

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "INR",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//listne comand
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-16bc5/us-central1/api