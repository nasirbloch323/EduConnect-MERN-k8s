// Annoucment

const mongoose = require("mongoose");
const annoucmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    desc: { type: String, required: true },
    image: { type: Object, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Annoucment", annoucmentSchema);

exports.Product = Product;
