const Post = require("../../models/Post");
const User = require("../../models/User");
const Comment = require("../../models/Comment");
const log = require("../logger/index");

const createCommentHandler = async (req, res) => {
  try {
    const { user, post, description } = req.body;

    const userPosting = await User.findById(user);
    if (!userPosting) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const postToComment = await Post.findById(post);
    if (!postToComment) {
      return res.status(404).send({
        message: "No post found",
      });
    }

    let comment = await Comment.create({ description, user, post });
    console.log(comment);

    res.json({
      status: 201,
      message: "user comment successfully",
      comment,
    });
  } catch (err) {
    log.error(err.message);
  }
};

module.exports = {
  createCommentHandler,
};
