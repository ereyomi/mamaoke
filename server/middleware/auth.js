const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

const config = process.env;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}


const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || (req.headers && req.headers["authorization"].split(" ")[1]);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  jwt.verify(token, config.TOKEN_KEY, (err, decoded) => {
    console.log(err, decoded)
      if (err) {
        return catchError(err, res);
      }
      req.user = decoded;
      next();
    });
   /*
   try {
    const decoded = jwt.verify(token, config.TOKEN_KEY, );
    req.user = decoded;
    console.log(decoded); 
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
  */
};


module.exports = { verifyToken };
