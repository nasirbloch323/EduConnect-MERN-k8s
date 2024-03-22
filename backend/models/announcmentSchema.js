const mongoose = require("mongoose")

const AnnSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model("annocment", AnnSchema)
