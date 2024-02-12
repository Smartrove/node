// post.routes.js

const express = require("express");
const { createCommentHandler } = require("../../controller/comment.controller");

const CommentRouter = express.Router();

CommentRouter.post("/create", createCommentHandler);
// CategoryRouter.get("/get", viewAllCategoryHandler);
// CategoryRouter.get("/get/:id", viewSingleCategoryHandler);
// CategoryRouter.put("/update/:id", updateCategoryHandler);
// CategoryRouter.delete("/delete/:id", deleteCategoryHandler);

module.exports = CommentRouter;
