const assignmentSchema = require("../models/assignmentSchema.js")
const studentSchema = require("../models/studentSchema.js")

// POST /assignments
const createAssignment = async (req, res) => {
	try {
		const { title, dueDate } = req.body
		//   const teacherId = req.user._id; // Get ID from authentication middleware.
		const teacherId = 233333333333

		const assignment = await assignmentSchema.create({
			title,
			dueDate,
			createdBy: teacherId,
		})

		// Update relevant users (students) with the new assignment.
		const students = await studentSchema.find({ role: "Student" })
		//   for (const student of students) {
		//     student.assignments.push(assignment._id);
		//     await student.save();
		//   }

		res
			.status(201)
			.json({ message: "Assignment created successfully!", students })
	} catch (error) {
		res.status(500).json({ message: "Error creating assignment" })
	}
}

module.exports = createAssignment
