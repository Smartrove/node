// post.routes.js

const express = require("express");
const {
  createPostHandler,
  viewAllPostsHandler,
} = require("../../controller/post.controller");

const PostRouter = express.Router();

PostRouter.post("/create", createPostHandler);
PostRouter.get("/get", viewAllPostsHandler);

module.exports = PostRouter;
