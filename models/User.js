const { mongoose, Schema } = require("./index");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
