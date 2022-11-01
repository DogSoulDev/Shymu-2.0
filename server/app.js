const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.get("/",(req,res)=>{
	res.json("server start")
})

app.use(cors({ origin: true }));
//!Esto lo que hace es convertir los datos default en JSON:
app.use(express.json());

//!Todas estas RUTAS las tenemos comprobadas en POSTMAN.
//*User authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

//*Artist links
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

//*Album links
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

//*Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);


//!User authentication route

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

const host = process.env.LH_PORT || '0.0.0.0'
const port = process.env.LH_HOST || 4000;

app.listen(process.env.LH_PORT, (req, res) => {
	console.log("Server Runs OK!");
});
