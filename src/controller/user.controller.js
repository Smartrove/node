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
      data: "user logged in sucessfully",
    });
  } catch (error) {
    log.error(error.message);
  }
};

module.exports = {
  createUserHandler,
  loginUserHandler,
};
