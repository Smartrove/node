const express = require("express");
const Post = require("../../models/Post");
const User = require("../../models/User");
const log = require("../logger/index");

//logic to create a post

const createPostHandler = async (req, res) => {
  const { user } = req.body;

  try {
    const author = await User.findById(user);
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

const likeAndDislikePostHandler = async (req, res) => {
  const { id } = req.body;
  const postId = req.params.id;
  console.log(id);
  try {
    //find post to be liked
    const post = await Post.findById(postId);
    //check if the post has been liked already
    const postAlreadyLiked = post.numberOfLikes.includes(id);
    //if user already liked the post, unlike it
    if (postAlreadyLiked) {
      post.numberOfLikes = post.numberOfLikes.filter((like) => like != id);
      await post.save();

      res.json({
        status: "success",
        message: "post disliked successfully",
        post,
      });
    } else {
      //if the user has not liked the post, then like it
      post.numberOfLikes.push(id);
      await post.save();
    }

    res.json({
      status: "success",
      message: "post liked successfully",
      post,
    });
  } catch (err) {
    log.error(err.message);
  }
};

//number of view counts
const postViewCountHandler = async (req, res, next) => {
  const { userId } = req.body;
  const postId = req.params.id;
  try {
    //find post to be liked
    const post = await Post.findById(postId);
    //number of views
    //check if user has viewed post
    const isViewed = post.numberOfViews.includes();
    if (isViewed) {
      res.json({
        status: "success",
        post,
      });
    } else {
      res.json({
        status: "success",
        post,
      });
      //push the user id into the number of view arrays
      post.numberOfViews.push(userId);
      await post.save();
    }
  } catch (err) {
    log.error(err.message);
  }
};

const updatePostHandler = async (req, res) => {
  const { title, description, category, userId } = req.body;

  try {
    //find post to be liked
    const post = await Post.findById(req.params.id);
    //check if post belongs to the current user
    if (post.user.toString() !== userId) {
      return res.json({
        status: 404,
        message: "You do not have permission to update this post",
      });
    }
    const newPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        photo: req?.file?.path,
      },
      { new: true }
    );
    res.json({
      status: "success",
      message: "Post updated successfully",
      newPost,
    });
  } catch (err) {
    log.error(err.message);
  }
};

module.exports = {
  createPostHandler,
  viewAllPostsHandler,
  likeAndDislikePostHandler,
  postViewCountHandler,
  updatePostHandler,
};
