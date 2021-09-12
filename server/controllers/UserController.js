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
        expiresIn: "2h",
      }
        );

    // update token
    user.token = token;
    // the name is still "Jane" in the database
        await user.save();
        
        // get update instance
        await user.reload();

    // return new user
    res.status(201).json(user);
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
                    expiresIn: "2h",
                }
            );
        
            // update token
            user.token = token;
            // the name is still "Jane" in the database
            await user.save();
        
            // get update instance
            await user.reload();

            // user
            res.status(200).json(user);
        } else {
            res.status(400).send("Invalid Credentials"); 
        }
  } catch (err) {
    console.log(err);
  }
}







module.exports = {
    registerUser,
    login
};