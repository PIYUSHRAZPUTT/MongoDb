import mongoose from "mongoose";
import User from "./models/User.js";
import Profile from "./models/Profile.js";
import Post from "./models/Post.js";

await mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => console.log("Databse connected successfully"))
  .catch((err) => console.log("Unable to connect mongodb", err));

await User.deleteMany();
await Profile.deleteMany();
await Post.deleteMany();

// create User
const user = await User.create({
  name: "Piyush",
  email: "piyushrajpoot@gmail.com",
});

// create Profile
const profile = await Profile.create({
  bio: "Mern stack learner",
  avatar: "url-to-avatar",
  user: user._id,
});

user.profile = await profile._id;
await user.save();

// create Posts
const post1 = await Post.create({
  title: "Learn mongodb",
  content: "Mongodb is a non structured database",
  author: user._id,
});

const post2 = await Post.create({
  title: "Learn sql",
  content: "SQL is a structured database",
  author: user._id,
});
user.posts = [post1._id, post2._id];
await user.save();

// Populate the reference
const result = await User.findById(user._id)
  .populate("profile")
  .populate("posts")
  .exec();

const aggregate = await Post.aggregate([
  //  join the users
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "userInfo",
    },
  },
  // unwind userInfo array of object
  { $unwind: "$userInfo" },

  // group by user and compute stats
  {
    $group: {
      _id: "$userInfo._id",
      userName: { $first: "$userInfo.name" },
      totalPosts: { $sum: 1 },
      avgContentLength: { $avg: { $strLenCP: "$content" } },
    },
  },

  // sort by total posts descending
  { $sort: { totalPosts: -1 } },
]);

console.log("Aggregation Stats:");
console.log(aggregate);

// console.log('User with Profile and Post', JSON.stringify(result, null, 2));

await mongoose.disconnect();
