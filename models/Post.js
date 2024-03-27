const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email field is required"],
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "FullName field is required"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
