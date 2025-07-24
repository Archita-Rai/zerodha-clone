require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

// mongoose.connect(URL,()=>{
//     console.log("db connected");
// })

main()
  .then(() => {
    console.log("Connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

const app = express();
app.listen(PORT, (req, res) => {
  console.log("app is lestening on the port 8080");
});
