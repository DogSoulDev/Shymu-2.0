//!Para hacer peticiones tenemos que meter en el Header de Postman en KEY: Authorization y en VALUE:El Token que se genera en la parte de Client al loguearse con Google.
//* Tenemos el token desencriptado en nuestra variable decodeValue

const router = require("express").Router();
const admin = require("../config/firebase.config");
const user = require("../models/user");

router.get("/login", async (req, res) => {
	if (!req.headers.authorization) {
		return res.status(500).send({ message: "Invalid Token" });
	}
	const token = req.headers.authorization.split(" ")[1];
	try {
		const decodeValue = await admin.auth().verifyIdToken(token);
		if (!decodeValue) {
			return res.status(505).json({ message: "Not Authorized!" });
		} else {
			//!Checking user exists or not.
			const userExists = await user.findOne({ user_id: decodeValue.user_id });
			if (!userExists) {
				newUserData(decodeValue, req, res);
				//! If user exists then i throw:
			} else {
				updateNewUserData(decodeValue, req, res);
			}
		}
	} catch (error) {
		return res.status(505).json({ message: error });
	}
});
const newUserData = async (decodeValue, req, res) => {
	const newUser = new user({
		name: decodeValue.name,
		email: decodeValue.email,
		imageURL: decodeValue.picture,
		user_id: decodeValue.user_id,
		email_verified: decodeValue.email_verified,
		role: "member",
		auth_time: decodeValue.auth_time,
	});
	try {
		const savedUser = await newUser.save();
		res.status(200).send({ user: savedUser });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
};

//*Con esta nueva funcion tenemos que hacer un fetch al usuario que ya tenemos en la base de datos para actualizarlo:
//*Toda la info en : https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/
//*Estamos cambiando en nuestra base de datos (Usando Postman) el  "auth_time"
const updateNewUserData = async (decodeValue, req, res) => {
	const filter = { user_id: decodeValue.user_id };
	const options = {
		upsert: true,
		new: true,
	};
	try {
		const result = await user.findOneAndUpdate(
			filter,
			{ auth_time: decodeValue.auth_time },
			options,
		);
		res.status(200).send({ user: result });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
};

module.exports = router;
