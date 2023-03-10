import jwt from "jsonwebtoken";
// used in the routes
// want to like a post?
// click the like button => auth middleware (next) => like controller ...

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // Own token or google auth token checker
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      // for Google
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
