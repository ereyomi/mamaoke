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
      req.userId = decoded.id;
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




/* const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

    console.log(refreshToken)

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });
      
      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}; */

module.exports = { verifyToken };
