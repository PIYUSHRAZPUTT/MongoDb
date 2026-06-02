import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  }, //one to one relationship
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ], //one to many relationship
});

const User = mongoose.model("User", userSchema);

export default User;
