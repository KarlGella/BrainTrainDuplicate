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
  { collection: "fourthSets" }
);

mongoose.model("fourthSets", q2Schema);
