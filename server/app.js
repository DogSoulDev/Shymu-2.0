const express = require("express");
const app = express();
const cors = require("cors");


app.get("/", (req, res)=> {
  return res.json("Hi there...");
})

app.listen(4000, ()=> console.log("Listening to port 4000"));