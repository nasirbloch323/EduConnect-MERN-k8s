const PdfSchema = require("../models/pdfModel.js")

// app.post("/upload-files", upload.single("file"),
const upload_files = async (req, res) => {
	console.log(req.file)

	const pdfData = {
		title: req.file.originalname,
		pdf: req.file.filename,
	}
	// res.status(200).json({ msg: "File uploaded", pdfData })
	try {
		await PdfSchema.create(pdfData)
		res.send({ status: "ok" })
	} catch (error) {
		res.json({ status: error })
	}
}

const get_files = async (req, res) => {
	try {
		PdfSchema.find({}).then((data) => {
			res.send({ status: "ok", data: data })
		})
	} catch (error) {}
}
module.exports = { get_files, upload_files }
