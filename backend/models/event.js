// events

const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		desc: { type: String, required: true },
		image: { type: Object, required: true },
	},
	{ timestamps: true }
)

const Event = mongoose.model("Event", eventSchema)

exports.Event = Event
