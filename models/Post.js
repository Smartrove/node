const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: [true, "Email field is required"],
      trim: true,
    },
    FullName: {
      type: String,
      required: [true, "FullName field is required"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
