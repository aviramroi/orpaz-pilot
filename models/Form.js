const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormsSchema = new Schema({
  title:String,
  schema:Array,
  description:String,
  layout:String,
});

module.exports = mongoose.model("forms", FormsSchema, "forms");