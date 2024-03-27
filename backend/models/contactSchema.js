const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true, // Removes leading and trailing whitespace
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	phoneNo: {
		type: String,
		trim: true,
	},
})
module.exports = new mongoose.model("contact", contactSchema)
