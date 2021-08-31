const express = require('express');
const bodyParser = require( 'body-parser' );
const cors = require('cors');
const app = express();

//dot env
const dotenv = require('dotenv');
dotenv.config();

// enabling CORS for all requests
app.use( cors() );

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use( bodyParser.urlencoded( {extended: true} ) );

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
const path = require('path');
const dir = path.join(__dirname, 'public');

app.use( express.static( dir ) )
/*  */
//router routes
// const productRouter = require('./server/router/ProductRouter')
// app.use('/api', productRouter);
/*  */

const port = process.env.PORT || 3100;

app.listen( port, function () {
    console.log( 'Express server listening on port ' + port )
} );


const {PUBLIC_KEY,  SECRET_KEY, ENCRYPTION_KEY} = process.env;

const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave( PUBLIC_KEY, SECRET_KEY );
const payload = {
    "card_number": "5531886652142950",
    "cvv": "564",
    "expiry_month": "09",
    "expiry_year": "21",
    "currency": "NGN",
    "amount": "100",
    "redirect_url": "https://www.google.com",
    "fullname": "Ereyomi Testing",
    "email": "ereyomioluwaseyi@gmail.com",
    "phone_number": "07035432921",
    "enckey": ENCRYPTION_KEY,
    "tx_ref": "MC-32444ee--4eerye4euee3rerds4423e59kz" // This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.

}


const chargeCard = async () => {
    try {
        const response = await flw.Charge.card(payload)
        console.log(response)
        if (response.meta.authorization.mode === 'pin') {
            let payload2 = payload
            payload2.authorization = {
                "mode": "pin",
                "fields": [
                    "pin"
                ],
                "pin": 3310
            }
            const reCallCharge = await flw.Charge.card(payload2)

            const callValidate = await flw.Charge.validate({
                "otp": "12345",
                "flw_ref": reCallCharge.data.flw_ref
            })
            console.log(callValidate)

        }
        if (response.meta.authorization.mode === 'redirect') {

            var url = response.meta.authorization.redirect
            open(url)
        }

        console.log(response)


    } catch (error) {
        console.log(error)
    }
}

// chargeCard();