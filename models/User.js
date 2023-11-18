const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//create schema

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "first name is required"],
    },
    lastname: {
      type: String,
      required: [true, "last name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    profilePhoto: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    postCount: {
      type: Number,
      default: 0,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Admin", "Guest", "Editor"],
    },
    viewBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    follower: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
