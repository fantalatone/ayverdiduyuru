const mongoose = require("mongoose");
const { Schema } = mongoose;

const qaSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const QA = mongoose.model("Soru", qaSchema, "Sorular");
module.exports = QA;