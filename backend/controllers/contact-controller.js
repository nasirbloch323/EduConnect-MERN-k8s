const contact = require("../models/contactSchema")

const contactUs = async (req, res) => {
	try {
		const { name, email, address, description, phoneNo } = req.body
		const newContact = new contact({
			name,
			email,
			address,
			description,
			phoneNo,
		})
		await newContact.save()
		res
			.status(201)
			.json({ success: true, message: "Contact created successfully!" })
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Error creating contact" })
	}
}
const getAllContacts = async (req, res) => {
	try {
		const contacts = await contact.find() // Find all contacts in the collection
		res.status(200).json(contacts) // Send all contacts data in JSON format
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: "Error fetching contacts" })
	}
}

const getContactById = async (req, res) => {
	const { id } = req.params // Extract contact ID from request parameters
	// console.log(id)
	try {
		const getcontact = await contact.findById(id) // Find contact by ID

		if (!getcontact) {
			return res.status(404).json({ message: "Contact not found" })
		}

		res.status(200).json(getcontact) // Send contact details in JSON format
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: "Error fetching contact" })
	}
}
const deleteContactById = async (req, res) => {
	try {
		const { id } = req.params // Extract contact ID from request parameters

		const deletedContact = await contact.findByIdAndDelete(id) // Find contact by ID and delete

		if (!deletedContact) {
			return res
				.status(404)
				.json({ success: false, message: "Contact not found" })
		}

		res
			.status(200)
			.json({ success: true, message: "Contact deleted successfully" }) // Success message
	} catch (err) {
		console.error(err)
		res.status(500).json({ success: false, message: "Error deleting contact" })
	}
}

module.exports = {
	contactUs,
	getAllContacts,
	getContactById,
	deleteContactById,
}
