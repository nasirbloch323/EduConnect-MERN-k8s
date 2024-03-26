const bcrypt = require("bcrypt")
// const moment = require("moment");
const Event = require("../models/eventSchema")

// event By Developer

const createEvent = async (req, res) => {
	try {
		const { title, description, date } = req.body
		// console.log(title, description)
		//   const teacherId = req.user._id; // Get ID from authentication middleware.
		const events = await Event.create({
			title,
			description,
			date,
		})
		await events.save()
		res.status(201).json(events)
	} catch (error) {
		res.status(500).json({ message: "Error creating assignment" })
	}
}
const getEvent = async (req, res) => {
	try {
		const allEvent = await Event.find()
		if (!allEvent || allEvent.length == 0) {
			return res.status(401).json({ message: "Not Found any event" })
		}

		res.status(201).json(allEvent)
	} catch (error) {
		res.status(500).json({ message: "Error Getting Event" })
	}
}
const deleteEvent = async (req, res) => {
	try {
		const { id } = req.params
		// Validate Event ID
		if (!id) {
			return res.status(400).json({ message: "Event ID is required" })
		}

		const deletedevent = await Event.findByIdAndDelete(id)

		if (!deletedevent) {
			return res.status(404).json({ message: "Event not found" })
		}

		res
			.status(200)
			.json({ status: true, message: "Event deleted successfully" })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error deleting Event" })
	}
}
const updateEvent = async (req, res) => {
	try {
		const { id } = req.params
		// const { title, description } = req.body

		const updatedEvent = await Event.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true } // Return the updated document
		)
		if (!updatedEvent) {
			return res.status(404).json({ message: "Event not found" })
		}

		res.status(200).json({
			status: true,
			message: "event updated successfully",
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error updating event" })
	}
}

module.exports = {
	createEvent,
	getEvent,
	deleteEvent,
	updateEvent
}

