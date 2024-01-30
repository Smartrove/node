// main router file

const express = require("express");
const UserRouter = require("./user/routes");
const PostRouter = require("./post/routes");
const CategoryRouter = require("./category/routes");
const Router = express.Router();

// Use the UserRouter as a route
Router.use("/user", UserRouter);
Router.use("/post", PostRouter);
Router.use("/category", CategoryRouter);

module.exports = Router;
