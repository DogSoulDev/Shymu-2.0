const artist = require("../models/artist");
const router = require("express").Router();

//!Info de sort en : https://www.mongodb.com/docs/upcoming/reference/method/cursor.sort/
router.get("/getAll", async (req, res) => {
	const options = {
		//*Sort returned documents in ascending order
		sort: { createdAt: 1 },
		//*Include only the following
		//*Projection : {}
	};
	const cursor = await artist.find(options);
	if (cursor) {
		res.status(200).send({ success: true, data: cursor });
	} else {
		res.status(200).send({ success: true, msg: "No Data Found" });
	}
});
router.get("/getOne/:getOne", async (req, res) => {
	const filter = { _id: req.params.getOne };
	const cursor = await artist.findOne(filter);
	if (cursor) {
		res.status(200).send({ success: true, data: cursor });
	} else {
		res.status(200).send({ success: true, msg: "No Data Found" });
	}
});
//! Esperara a que se conecte con mongodb y le haga un fetch a la data.
//!Toda info viene del API Body request y se guarda en mongoose con el .save()
router.post("/save", async (req, res) => {
	const newArtist = artist({
		name: req.body.name,
		imageURL: req.body.imageURL,
		twitter: req.body.twitter,
		instagram: req.body.instagram,
	});
	try {
		const savedArtist = await newArtist.save();
		res.status(200).send({ artist: savedArtist });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
});
//* El metodo de find one de Mongodb lo podemos ver : https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
//! Muy importante la coma despues de la ruta, que me he tirado 2h con eso!!!!!!
//? Aqui usamos la funcion de MongoDB findOneAndUpdate : https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/
router.put("/update/:updateId", async (req, res) => {
	const filter = { _id: req.params.updateId };
	const options = {
		upsert: true,
		new: true,
	};
	try {
		const result = await artist.findOneAndUpdate(
			filter,
			{
				name: req.body.name,
				imageURL: req.body.imageURL,
				twitter: req.body.twitter,
				instagram: req.body.instagram,
			},
			options,
		);
		res.status(200).send({ artist: result });
	} catch (error) {
		res.status(400).send({ success: false, msg: error });
	}
});
router.delete("/delete/:deleteId", async (req, res) => {
	const filter = { _id: req.params.deleteId };
	const result = await artist.deleteOne(filter);
	if (result.deletedCount === 1) {
		res.status(200).send({ success: true, msg: "Data Deleted!" });
	} else {
		res.status(200).send({ success: false, msg: "Data Not Found!" });
	}
});

module.exports = router;
