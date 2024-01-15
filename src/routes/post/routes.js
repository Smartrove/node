// post.routes.js

const express = require("express");
const {
  createPostHandler,
  viewAllPostsHandler,
  likeAndDislikePostHandler,
  postViewCountHandler,
} = require("../../controller/post.controller");

const PostRouter = express.Router();

PostRouter.post("/create", createPostHandler);
PostRouter.get("/get", viewAllPostsHandler);
PostRouter.post("/likeAndDislike/:id", likeAndDislikePostHandler);
PostRouter.post("/viewcount/:id", postViewCountHandler);

module.exports = PostRouter;
