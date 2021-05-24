const mongoose = require("mongoose");
const { Schema } = mongoose;

const qaSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    senderName: {
        type: String
    },
    senderSchoolNo: {
        type: String
    },
    senderGrade: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const QA = mongoose.model("Soru", qaSchema, "Sorular");
module.exports = QA;