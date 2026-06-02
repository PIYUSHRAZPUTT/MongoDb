import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be required"],
    minlength: [3, "name must be at least 3 characters"],
    maxlength: [20, "name must be at most 20 characters"],
  },
  age: {
    type: Number,
    minmum: [18, "age must be greater than 18 years"],
    maximum: [65, "age must be lesst than 65 years"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: [true, "paswordd must be required"],
    minLength: [6, "password must be greater than 6 letters"],
    maxLength: [20, "password must be less than 20 letters"],
  },
  confirmPassword: {
    type: String,
    required: [true, "confirm password must be required"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Password do not match",
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
export default User;
