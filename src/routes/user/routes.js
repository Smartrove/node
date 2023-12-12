// user.routes.js

const express = require("express");
const {
  createUserHandler,
  loginUserHandler,
  updateUserHandler,
  getAllUsersHandler,
  getSingleUserHandler,
  deleteUserHandler,
  userFollowingHandler,
  userUnfollowingHandler,
  updatePasswordHandler,
} = require("../../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/create", createUserHandler);
UserRouter.post("/login", loginUserHandler);
UserRouter.put("/update", updateUserHandler);
UserRouter.get("/get-all-users", getAllUsersHandler);
UserRouter.get("/get/:id", getSingleUserHandler);
UserRouter.delete("/delete/:id", deleteUserHandler);
UserRouter.post("/following/:id", userFollowingHandler);
UserRouter.post("/unfollowing/:id", userUnfollowingHandler);
UserRouter.put("/update-password", updatePasswordHandler);

module.exports = UserRouter;
