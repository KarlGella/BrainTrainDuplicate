const mongoose = require("mongoose");
const { Schema } = mongoose;

const q2Schema = new Schema(
  {
    a: String,
    b: String,
    c: String,
    d: String,
    q: String,
    ans: String,
    num: Number,
  },
  { collection: "thirdSets" }
);

mongoose.model("thirdSets", q2Schema);
