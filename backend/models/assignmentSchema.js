const mongoose = require("mongoose")

const assignmentSchema = new mongoose.Schema(
	{
		topic: {
			type: String,
			required: true,
		},
		dueDate: {
			type: Date,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "teacher", // Reference to the Teacher
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "accepted", "declined"],
			default: "pending",
		},
		submissions: [
			{
				student: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User", // Reference to the User model (Student)
				},
				submissionDate: {
					type: Date,
				},
				status: {
					type: String,
					enum: ["pending", "submitted", "late"],
					default: "pending",
				},
			},
		],
	},
	{ timestamps: true }
)

module.exports = mongoose.model("assignment", assignmentSchema)
