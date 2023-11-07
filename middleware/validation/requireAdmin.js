const { get } = require("lodash");

const requiresAdmin = async (
  req,
  res,
  next
) => {
  const user = get(req, "user");

  if (!user) {
    return res.status(403).json({ 
      status: 403,
      message: "User not found. Kindly log in",
    });
  }

  if (String(user?.role) !== "admin") return res.status(401).json({ 
      status:401,
      message: "User not authorized"
    });

  return next();
};

module.exports =requiresAdmin;
