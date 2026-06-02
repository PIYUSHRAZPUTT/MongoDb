import mongoose from "mongoose";

// connect database
await mongoose.connect("mongodb://localhost:27017");

// define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: {
    type: String,
    match: /.+\@.+\..+/,
  },
  createdAt: { type: Date, default: Date.now },
});

// define User Model
const User = mongoose.model("User", userSchema);

// create and save documents
const user = User({
  name: "Neelesh",
  age: 23,
  email: "Neeleshhrajpoot1488999@gmail.com",
});
// await user.save();

// find user
await User.updateOne(
  { name: "Neelesh" },
  { $set: {age:25} },
);
const findUser = await User.find({age:{$gte:20}});
console.log(findUser);

await User.deleteOne({age:{$gte:21}});
