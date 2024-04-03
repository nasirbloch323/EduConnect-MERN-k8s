const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const PORT = process.env.PORT || 5000

// Ann
const annRoute = require("./routes/products.js")
const eventRoute = require("./routes/events.js")
const researchRoute = require("./routes/research.js")

dotenv.config()
app.use(bodyParser.json({ limit: "10mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.use(express.json({ limit: "10mb" }))
app.use(cors())

app.use("/files", express.static("files"))

app.use(
	cors({
		origin: ["https://edu-connect1.vercel.app", "http://localhost:3000"],
		methods: ["POST", "GET"],
		credentials: true,
	})
)
app.use(express.json())

const uri =
	"mongodb://educonnect:educonnect123@ac-rd6itgi-shard-00-00.b8ejcje.mongodb.net:27017,ac-rd6itgi-shard-00-01.b8ejcje.mongodb.net:27017,ac-rd6itgi-shard-00-02.b8ejcje.mongodb.net:27017/educonnect?ssl=true&replicaSet=atlas-tnocmg-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose
	.connect(process.env.MONGODB_URL || uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Connected to MongoDB"))
	.catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// Ann
app.use("/products", annRoute)
app.use("/events", eventRoute)
app.use("/researchs", researchRoute)
//
app.use("/", Routes)
app.get("/", async (req, res) => {
	res.json("Welcome to website")
})
app.listen(PORT, () => {
	console.log(`Server started at port no. ${PORT}`)
})
