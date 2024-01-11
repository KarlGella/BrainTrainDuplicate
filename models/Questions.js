const mongoose = require("mongoose");
const { Schema } = mongoose;

const qSchema = new Schema({
  a: String,
  b: String,
  c: String,
  d: String,
  q: String,
  ans: String,
  num: Number,
});

mongoose.model("readingComprehesions", qSchema);
