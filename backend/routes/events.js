const { Event } = require("../models/event")
const cloudinary = require("../utili/cloudinary")

const router = require("express").Router()

//CREATE Annoucment

router.post("/", async (req, res) => {
	const { name, endDate, startDate, desc, image } = req.body

	try {
		if (image) {
			const uploadedResponse = await cloudinary.uploader.upload(image, {
				upload_preset: "annConnect",
			})

			if (uploadedResponse) {
				const event = new Event({
					name,
					endDate,
					startDate,
					desc,
					image: uploadedResponse,
				})

				const savedevent = await event.save()
				res.status(200).send(savedevent)
			}
		}
	} catch (error) {
		console.log(error)
		res.status(500).send(error)
	}
})

//DELETE Annoucment

router.delete("/:id", async (req, res) => {
	try {
		await Event.findByIdAndDelete(req.params.id)
		res.status(200).send("Annoucment has been deleted...")
	} catch (error) {
		res.status(500).send(error)
	}
})

//GET All Annoucment

router.get("/", async (req, res) => {
	const qbrand = req.query.brand
	try {
		let products

		if (qbrand) {
			products = await Event.find({
				brand: qbrand,
			})
		} else {
			products = await Event.find()
		}

		res.status(200).send(products)
	} catch (error) {
		res.status(500).send(error)
	}
})

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
	try {
		const product = await Event.findById(req.params.id)
		res.status(200).send(product)
	} catch (error) {
		res.status(500).send(error)
	}
})

//UPDATE

router.put("/:id", async (req, res) => {
	try {
		const updatedProduct = await Event.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).send(updatedProduct)
	} catch (error) {
		res.status(500).send(error)
	}
})

module.exports = router
