const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Op } = require('sequelize')

const User = require( './../models/Index' ).User;
const MainController = require( './MainController' );

const registerUser = async ( req, res ) => {
    const { body } = req;

    try {
    // Get user input
    const { first_name, last_name, email, password } = body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).json("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne( {
            where: {email: email},
    });
        

     if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
        }
        

    //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
        
    // Create user in our database
    const user = await MainController.create(
        User,
        {
            ...body,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            // token: token,
            role: 0 // role cnnot be null
        });

     // Create token
    const token = jwt.sign(
      { user_id: user.id, email: email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "20s",
      }
        );

    // refresh token 
            const refreshToken = jwt.sign(
                { user_id: user.id, email },
                process.env.REFRESH_TOKEN_KEY,
                {
                    expiresIn:  process.env.REFRESH_TOKEN_LIFE,
                }
            );
        
            // update token
            user.token = token;
            user.refreshToken = refreshToken;
            // the name is still "Jane" in the database
            await user.save();
        
            // get update instance
            await user.reload();

    // return new user
        res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.role === 0 ? 'user' : 'admin',
        accessToken: token,
        refreshToken: refreshToken,
    });
  } catch (err) {
    return res.status( 400 ).json( {
           error,
        })
  }
}

const login = async (req, res) => {
    try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne( {
            where: {email: email},
    });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "15s",
                }
            );

            // refresh token 
            const refreshToken = jwt.sign(
                { user_id: user.id, email },
                process.env.REFRESH_TOKEN_KEY,
                {
                    expiresIn:  process.env.REFRESH_TOKEN_LIFE,
                }
            );
        
            // update token
            user.token = token;
            user.refreshToken = refreshToken;
            // the name is still "Jane" in the database
            await user.save();
        
            // get update instance
            await user.reload();

            // user
             res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: user.role === 0 ? 'user' : 'admin',
                accessToken: token,
                refreshToken: refreshToken,
            });
        } else {
            res.status(400).send("Invalid Credentials"); 
        }
  } catch (err) {
    console.log(err);
  }
}


const getUserRefreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken === null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let getUserRefreshToken = await User.findOne({ where: { refreshToken: requestToken } });

    console.log(getUserRefreshToken)

    if (!getUserRefreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      // return;
    }
    jwt.verify(requestToken, process.env.REFRESH_TOKEN_KEY, (err, decoded) => {
    console.log(err, decoded)
      if (err) {
        res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      }
    });
      // Create token
            const token = jwt.sign(
                { user_id: getUserRefreshToken.id, email: getUserRefreshToken.email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "15s",
                }
            );

            // refresh token 
            const refreshToken = jwt.sign(
                { user_id: getUserRefreshToken.id, email: getUserRefreshToken.email  },
                process.env.REFRESH_TOKEN_KEY,
                {
                    expiresIn:  process.env.REFRESH_TOKEN_LIFE,
                }
            );
       // update token
        getUserRefreshToken.token = token;
        getUserRefreshToken.refreshToken = refreshToken;
        // the name is still "Jane" in the database
        await getUserRefreshToken.save();
    
        // get update instance
        await getUserRefreshToken.reload();

        // user
            res.status(200).send({
            id: getUserRefreshToken.id,
            username: getUserRefreshToken.username,
            email: getUserRefreshToken.email,
            roles: getUserRefreshToken.role === 0 ? 'user' : 'admin',
            accessToken: token,
            refreshToken: refreshToken,
        });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
      console.log(err)
    return res.status(500).send({ message: err, body: req.body });
  }
};







module.exports = {
    registerUser,
    login,
    getUserRefreshToken
};