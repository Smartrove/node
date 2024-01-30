// post.routes.js

const express = require("express");
const {
  createPostHandler,
  viewAllPostsHandler,
  likeAndDislikePostHandler,
  postViewCountHandler,
  updatePostHandler,
} = require("../../controller/post.controller");

const PostRouter = express.Router();

PostRouter.post("/create", createPostHandler);
PostRouter.get("/get", viewAllPostsHandler);
PostRouter.post("/likeAndDislike/:id", likeAndDislikePostHandler);
PostRouter.post("/viewcount/:id", postViewCountHandler);
PostRouter.put("/update/:id", updatePostHandler);
module.exports = PostRouter;
