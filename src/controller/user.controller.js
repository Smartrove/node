const log = require("../logger/index");
const User = require("../../models/User");
const bcrypt = require('bcryptjs')

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
    res.json({
      status: "success",
      data: "user logged in successfully",
    });
  } catch (error) {
    log.error(error.message);
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
    res.json({
      status: "success",
      data: "user gotten  successfully",
    });
  } catch (error) {
    log.error(error.message);
  }
};

const getSingleUserHandler = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user gotten  successfully",
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
};
