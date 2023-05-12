const mongoose = require("mongoose");

const FillingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imglink: {
        type: String,
        required: false,
    },
    calories: {
        type: Number,
        required: false,
    },
    price:{
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model("Filling", FillingSchema);