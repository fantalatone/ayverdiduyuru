const mongoose = require("mongoose");
const { Schema } = mongoose;

const annSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    banner: {
        data: String,
        contentType: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Announcement = mongoose.model("Duyuru", annSchema, "Duyurular");
module.exports = Announcement;