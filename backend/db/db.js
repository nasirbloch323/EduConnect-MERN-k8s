const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()

const connnectDB = async () => {
	const uri =
		"mongodb+srv://eduConnect:EKUGaD98G2eV8Djy@educonnect.zwczviv.mongodb.net/?retryWrites=true&w=majority"
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
	mongoose
		.connect(uri)
		.then(() => console.log("Mongodb is connected"))
		.catch((error) => console.log("Mongodb connection error", error))
	// Handle unhandled promise rejections
	process.on("unhandledRejection", (reason, promise) => {
		console.error("Unhandled Rejection at:", promise, "reason:", reason)
		// You can add custom handling logic here if needed.
	})

	// Handle unhandled exceptions (optional)
	process.on("uncaughtException", (error) => {
		console.error("Uncaught Exception:", error)
		// You can add custom handling logic here if needed.
	})
}
// export default connnectDB
exports.connnectDB = connnectDB
