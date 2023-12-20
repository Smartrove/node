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
  blockAndUnblockUserHandler,
  adminBlockedAndUnblockedUser,
  adminBlockedUser,
  adminUnblockedUser,
  userViewingProfileHandler,
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
UserRouter.post("/block-unblock/:id", blockAndUnblockUserHandler);
UserRouter.post("/admin-block/:id", adminBlockedUser);
UserRouter.post("/admin-unblock/:id", adminUnblockedUser);
UserRouter.post("/viewProfile/:id", userViewingProfileHandler);

module.exports = UserRouter;
