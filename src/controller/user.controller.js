const log = require("../logger/index");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../../config/generateToken");

const createUserHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(403).json({
        status: "failed",
        message: "user with this email already exists",
      });
    }

    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      ...req.body,
      password: hashPassword, // assuming password is in req.body
      role: "Guest",
    });

    res.json({
      status: 200,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    log.error(error.message);
    res.status(409).send(error.message);
  }
};

const loginUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if email already exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        status: "failed",
        message: "user with this email does not exist",
      });
    }

    const passwordMatched = await bcrypt.compareSync(password, user.password);
    if (!passwordMatched) {
      return res.status(403).json({
        status: "failed",
        message: "incorrect password",
      });
    }

    res.json({
      status: "success",
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    log.error(error.message);
  }
};

const userFollowingHandler = async (req, res) => {
  const { id } = req.body;
  try {
    //find the user following to be followed
    const user = await User.findById(req?.params?.id);

    //find the user to be following
    const followingUser = await User.findById(id);

    //check if the user already exist
    if (user && followingUser) {
      //check if the following user already followed the user
      const userFollowingExist = user.following.find((follower) => {
        return follower.toString() === followingUser?.id.toString();
      });

      if (userFollowingExist) {
        return res.status(403).json({
          status: "unsuccessful",
          message: "you already followed this user",
        });
      } else {
        user.follower.push(followingUser?._id);
        followingUser.following.push(user?._id);
        await user.save();
        await followingUser.save();

        res.json({
          status: "200",
          message: "user followed successfully",
        });
      }
    }
  } catch (err) {
    log.info(err.message);
    console.error(err.message);
  }
};

const userUnfollowingHandler = async (req, res) => {
  const { id } = req.body;
  try {
    //check the user to be unfollowed
    const userTobeUnfollowed = await User.findById(req.params.id);

    //check for the unfollowing user
    const unfollowingUser = await User.findById(id);

    if (userTobeUnfollowed && unfollowingUser) {
      const userFollowing = userTobeUnfollowed.follower.find(
        (follower) => follower.toString() === unfollowingUser._id.toString()
      );

      if (!userFollowing) {
        userTobeUnfollowed.follower.push(unfollowingUser._id);
        unfollowingUser.following.push(userTobeUnfollowed._id);

        await userTobeUnfollowed.save();
        await unfollowingUser.save();

        res.json({
          status: "success",
          message: "user followed successfully",
        });
      } else {
        userTobeUnfollowed.follower.filter(
          (follower) => follower.toString() !== unfollowingUser._id.toString()
        );

        unfollowingUser.following.filter(
          (following) =>
            following.toString() !== userTobeUnfollowed._id.toString()
        );

        await userTobeUnfollowed.save();
        await unfollowingUser.save();

        res.json({
          status: "success",
          message: " user unfollowed successfully",
        });
      }
    }
  } catch (err) {
    log.info(err.message);
  }
};

const updateUserHandler = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user updated  successfully",
    });
  } catch (error) {
    log.error(error.message);
  }
};

const getAllUsersHandler = async (req, res) => {
  try {
    const user = await User.find();
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    log.error(error.message);
  }
};

const getSingleUserHandler = async (req, res) => {
  try {
    const user = await User.findById(req?.params?.id);
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    log.error(error.message);
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user deleted successfully",
    });
  } catch (error) {
    log.error(error.message);
  }
};

module.exports = {
  createUserHandler,
  loginUserHandler,
  updateUserHandler,
  getAllUsersHandler,
  getSingleUserHandler,
  deleteUserHandler,
  userFollowingHandler,
  userUnfollowingHandler,
};
