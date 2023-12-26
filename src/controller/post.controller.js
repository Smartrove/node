const express = require("express");
const Post = require("../../models/Post");
const User = require("../../models/User");
const log = require("../logger/index");

//logic to create a post

const createPostHandler = async (req, res) => {
  const { id } = req.body;

  try {
    const author = await User.findById(id);
    if (author.isBlocked) {
      res.status(403).send("User is not authorized");
    }

    let body = req.body;

    const post = await Post.create({ ...body });
    author.posts.push(post);
    await author.save();

    res.json({
      status: 200,
      post,
    });
  } catch (error) {
    log.error(error.message);
  }
};

const viewAllPostsHandler = async (req, res) => {
  try {
    const post = await Post.find({}).populate("user");
    res.json({
      status: 200,
      post,
    });
  } catch (error) {
    log.error(error.message);
  }
};

module.exports = {
  createPostHandler,
  viewAllPostsHandler,
};
