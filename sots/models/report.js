const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  video: [
    {
      url: String,
      filename: String,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  weather: {
    type: String,
    required: false,
  },
  snowpack: {
    type: String,
    required: false,
  },
  avalanche: {
    type: String,
    required: false,
  },
  safetyRating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Report", ReportSchema);
