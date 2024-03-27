// main router file

const express = require("express");
const PostRouter = require("./post/routes");
const Router = express.Router();

// Use the UserRouter as a route
Router.use("/post", PostRouter);

module.exports = Router;
