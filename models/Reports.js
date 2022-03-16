const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    formId:String,
    answers:Object,
    createdBy:String,
    createdAt:Date
});

module.exports = mongoose.model("report", ReportSchema, "report");