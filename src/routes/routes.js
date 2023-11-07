// main router file

const express = require("express");
const UserRouter = require("./user/routes");
const Router = express.Router();

// Use the UserRouter as a route
Router.use("/user", UserRouter);

module.exports = Router;
