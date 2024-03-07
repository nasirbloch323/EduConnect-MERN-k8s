const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "student",
		required: true,
	},
	submittedAt: {
		type: Date,
		default: Date.now,
	},
	pdf: {
		type: String,
	}, // Filename of the submitted PDF (optional).
	status: {
		type: String,
		enum: ["pending", "submitted"],
		default: "pending",
	},
})

const assignmentSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	dueDate: {
		type: Date,
		required: true,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "teacher",
		required: true,
	},
	submissions: [submissionSchema],
})

module.exports = mongoose.model("Assignment", assignmentSchema)
