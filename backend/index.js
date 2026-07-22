const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const PORT = process.env.PORT || 5000

const annRoute = require("./routes/products.js")
const eventRoute = require("./routes/events.js")
const researchRoute = require("./routes/research.js")

dotenv.config()
app.use(bodyParser.json({ limit: "10mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.use(express.json({ limit: "10mb" }))

app.use("/files", express.static("files"))

app.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
}))

app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use("/products", annRoute)
app.use("/events", eventRoute)
app.use("/researchs", researchRoute)
app.use("/", Routes)

app.get("/", async (req, res) => {
    res.json("Welcome to website")
})

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
