const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    // images: [
    //   {
    //     publicId: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", AnnouncementSchema);
