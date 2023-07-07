/* eslint-disable no-undef */
const express = require("express");

const cors = require("cors");

const server = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://rohandhn786:sBhGxLRPT97Rz7R2@portfoliodata.gbt9wgc.mongodb.net/");
  console.log("mongodb connected");
}
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  password: String,
});

const User = mongoose.model("UserData", userSchema);

server.use(cors());

server.use(bodyParser());

server.post("/form", async (req) => {
  let user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.password = req.body.password;
  const saveddata = await user.save();
  console.log(saveddata);
});

server.get("/form", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

server.listen(8080, () => {
  console.log("server started");
});
