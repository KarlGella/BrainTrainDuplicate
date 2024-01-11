const mongoose = require("mongoose");
const { Schema } = mongoose;

const moduleSchema = new Schema(
  {
    topic: String,
    desciption: String,
    link: String,
  },
  { collection: "modules" }
);

mongoose.model("modules", moduleSchema);
