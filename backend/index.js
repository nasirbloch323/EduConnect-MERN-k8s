const express = require("express")
const cors = require("cors")
// const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const db = require("./db/db.js")
const PORT = process.env.PORT || 5000
// Osama Update
db.connnectDB()
//
dotenv.config()

app.use(bodyParser.json({ limit: "10mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.use(express.json({ limit: "10mb" }))
app.use(cors())

// mongoose
// 	.connect("mongodb://127.0.0.1:27017/database", {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(console.log("Connected to MongoDB"))
// 	.catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use("/", Routes)
app.get("/", async (req, res) => {
	res.json("Welcome to website")
})
app.listen(PORT, () => {
	console.log(`Server started at port no. ${PORT}`)
})
