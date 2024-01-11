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
  { collection: "secondSets" }
);

mongoose.model("secondSets", q2Schema);
