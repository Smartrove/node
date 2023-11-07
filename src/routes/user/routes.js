// user.routes.js

const express = require("express");
const { createUserHandler } = require("../../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/create", createUserHandler);

module.exports = UserRouter;
