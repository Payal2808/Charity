const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
    },
    status: {
      type: String,
      enum: ["NoBooked", "Booked"],
      default: "NoBooked",
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Product", productSchema);

module.exports = productSchema;
