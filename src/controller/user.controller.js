const log = require("../logger/index");

const createUserHandler = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user created sucessfully",
    });
  } catch (error) {
    log.error(error.message);
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
