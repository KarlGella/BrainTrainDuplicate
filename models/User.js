const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  googleId: String,
  acctName: String,
  email: String,
  username: String,
  firstAttempts: Number,
  firstHighEasy: Number,
  firstHighMedium: Number,
  firstHighHard: Number,
  secondAttempts: Number,
  secondHighEasy: Number,
  secondHighMedium: Number,
  secondHighHard: Number,
  thirdAttempts: Number,
  thirdHighEasy: Number,
  thirdHighMedium: Number,
  thirdHighHard: Number,
  fourthAttempts: Number,
  fourthHighEasy: Number,
  fourthHighMedium: Number,
  fourthHighHard: Number,
  medals: Array,
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

mongoose.model("users", userSchema);
