const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv/config");

// app.use(cors({origin:true}));

app.get("/", (req, res) => {
	return res.json("Hi there...");
});

mongoose.connect(process.env.DB_STRING, (err, req) => {
	try {
		if (err) {
			throw err;
		} else {
			console.log("Connection to Mongodb OK!");
		}
	} catch (error) {
		console.log("Error connecting to Mongodb!");
	}
});

app.listen(4000, (req, res) => {
	console.log("Server runs OK!");
});
