require("dotenv").config(); // used when deploying code as there might be issues like same port not available in other device
const express = require("express");
//import express from "express" same
const app = express();
// app is a property like document.
const port = 4000;
// computer has many virtual , ports computer listens here (localhost3000)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//request & response
app.get("/twitter", (req, res) => {
  res.send("divyangTweets");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hey</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
