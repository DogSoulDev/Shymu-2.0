const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv/config");

// app.use(cors({origin:true}));

app.get("/", (req, res) => {
	return res.json("Hi there...");
});

//!User authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute)


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

app.listen(process.env.LH_PORT, (req, res) => {
	console.log("Server runs OK!");
});
