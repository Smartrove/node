// user.routes.js

const express = require("express");
const {
  createUserHandler,
  loginUserHandler,
  updateUserHandler,
  getAllUsersHandler,
  getSingleUserHandler,
  deleteUserHandler,
} = require("../../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/create", createUserHandler);
UserRouter.post("/login", loginUserHandler);
UserRouter.put("/update", updateUserHandler);
UserRouter.get("/get-all-users", getAllUsersHandler);
UserRouter.get("/user/:id", getSingleUserHandler);
UserRouter.delete("/delete/:id", deleteUserHandler);

module.exports = UserRouter;
