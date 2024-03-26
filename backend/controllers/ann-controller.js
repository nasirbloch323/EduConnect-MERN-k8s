const bcrypt = require("bcrypt")
// const moment = require("moment");
const Annocment = require("../models/announcmentSchema")

// Announcments By Developer

const createAnn = async (req, res) => {
	try {
		const { title, description,date } = req.body
		// console.log(title, description)
		//   const teacherId = req.user._id; // Get ID from authentication middleware.
		const ann = await Annocment.create({
			title,
			description,
            date, 
		})
		await ann.save()
		res.status(201).json(ann)
	} catch (error) {
		res.status(500).json({ message: "Error creating assignment" })
	}
}
const getAnn = async (req, res) => {
	try {
		const allAnn = await Annocment.find()
		if (!allAnn || allAnn.length == 0) {
			return res.status(401).json({ message: "Not Found any Announcements" })
		}

		res.status(201).json(allAnn)
	} catch (error) {
		res.status(500).json({ message: "Error Getting Announcements" })
	}
}
const deleteAnn = async (req, res) => {
	try {
		const { id } = req.params
		// Validate announcement ID
		if (!id) {
			return res.status(400).json({ message: "Announcement ID is required" })
		}

		const deletedAnnouncement = await Annocment.findByIdAndDelete(id)

		if (!deletedAnnouncement) {
			return res.status(404).json({ message: "Announcement not found" })
		}

		res
			.status(200)
			.json({ status: true, message: "Announcement deleted successfully" })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error deleting announcement" })
	}
}
const updateAnn = async (req, res) => {
	try {
		const { id } = req.params
		// const { title, description } = req.body

		const updatedAnnouncement = await Annocment.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true } // Return the updated document
		)
		if (!updatedAnnouncement) {
			return res.status(404).json({ message: "Announcement not found" })
		}

		res.status(200).json({
			status: true,
			message: "Announcement updated successfully",
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error updating announcement" })
	}
}

module.exports = {
	createAnn,
	getAnn,
	deleteAnn,
	updateAnn
}

