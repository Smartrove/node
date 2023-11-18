const User = require("../../models/User");

 const findUser = async (query, options = {}) => {
    console.log(query, options);
    return await User.findOne(query, options).lean();
  };

  module.exports = findUser;