const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { auth } = require("express-oauth2-jwt-bearer");
// const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      // console.log(req.user);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

// const checkJwt = jwt({
//   // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://dev-emufrdj4atb0xee3.us.auth0.com/.well-known/jwks.json`,
//   }),

//   // Validate the audience and the issuer
//   audience: "http://savethestrays/", //replace with your API's audience, available at Dashboard > APIs
//   issuer: "https://dev-emufrdj4atb0xee3.us.auth0.com/",
//   algorithms: ["RS256"],
// });
module.exports = {
  protect,
  // checkJwt,
};
