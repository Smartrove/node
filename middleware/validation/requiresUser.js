const { get } = require("lodash");

const requiresUser = async (
  req,
  res,
  next
) => {
  const user = get(req, "user");

  if (!user) {
    // return res.sendStatus(403);

    return res.status(403).json({ 
      status: 403,
      message: "User does not exist"
    });
  }

  return next();
};

module.exports =requiresUser;
