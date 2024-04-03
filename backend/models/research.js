// events

const mongoose = require("mongoose")
const researchSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		autherName: { type: String, required: true },
		desc: { type: String, required: true },
		image: { type: Object, required: true },
	},
	{ timestamps: true }
)

const Research = mongoose.model("Research", researchSchema)

exports.Research = Research
