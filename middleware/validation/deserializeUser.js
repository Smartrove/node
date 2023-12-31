const { get } = require("lodash");
const { decode } = require("../../utils/jwt.utils");
const { reIssueAccessToken } =  require("../../service/session/session.service");
const log = require("../../logger");

const deserializeUser = async (
  req,
  res,
  next
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    "" 
  );

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken){
      log.info('No access token')
       return next();
    }

  const { decoded, expired } = decode(accessToken);

  if (decoded) {
    // @ts-ignore
    req.user = decoded;

    return next();
  } 

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      // Add the new access token to the response header
      res.setHeader("x-access-token", newAccessToken);

      const { decoded } = decode(newAccessToken);

      // @ts-ignore
      req.user = decoded;
      console.log("decoded >> " , decoded)
      // console.log("decerialized >> " ,req.user)
    }

    return next();
  }

  return next();
};

module.exports = deserializeUser;
