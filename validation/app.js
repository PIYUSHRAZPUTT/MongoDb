import mongoose from "mongoose";
import User from "./modules/validation.js";

await mongoose
  .connect("mongodb://localhost:27017/validation")
  .then(() => {
    console.log("mongoose connected successfully");
  })
  .catch((error) => {
    console.error("Connection error:", error.message);
  })
  .finally(() => {
    mongoose.disconnect();
    console.log("mongoose disconnected successfully");
  });

async function createUser() {
  const newUser = new User({
    name: "Piyush",
    age: 21,
    email: "piyushrajpoot1488999@gmail.com",
    password: "@Piyush87",
    confirmPassword: "@Piyush87",
  });

  try {
    await newUser.save();
    console.log("User save successfully");
  } catch (error) {
    console.error("validation error:", error.message);
  }
}

createUser();
