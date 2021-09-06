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
console.log(dir);

app.use( express.static( dir ) )
/*  */
//router routes
// const productRouter = require('./server/router/ProductRouter')
// app.use('/api', productRouter);
/*  */
/* flutter wave */
const {PUBLIC_KEY,  SECRET_KEY, ENCRYPTION_KEY} = process.env;

const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave( PUBLIC_KEY, SECRET_KEY );

const open = require('open');
/*  */

app.get('/api/payment', async (req, res) => {
    const payload = {
        "card_number": "5531886652142950",
        "cvv": "564",
        "expiry_month": "09",
        "expiry_year": "21",
        "currency": "NGN",
        "amount": "5",
        "redirect_url": "https://www.google.com",
        "fullname": "Ereyomi Testing",
        "email": "ereyomioluwaseyi@gmail.com",
        "phone_number": "07035432921",
        "enckey": ENCRYPTION_KEY,
        "tx_ref": "MC-32444ee--4eerye4euee3rerds4423e59kwx",// This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
    }
    try {
        const response = await flw.Charge.card(payload)
        console.log(response)
        if (response.meta.authorization.mode === 'pin') {
           /*  const payload = {
                "length": 7,
                "customer": { "name": "Ereyomi", "email": "ereyomioluwaseyi@gmail.com", "phone": "2347035432921" },
                "sender": "mamaoke",
                "send": true,
                "medium": ["email", "whatsapp"],
                "expiry": 5
            }
    
            const responsep = await flw.Otp.create(payload)
            console.log(responsep);
            return res.status( 200 ).json( responsep ); */
           /*  try {

                const payload = {
                    "reference": "CF-BARTER-20210904022151755331",
                    "otp": "9505342"
                }
        
                const responsep = await flw.Otp.validate(payload)
                console.log(responsep);
            } catch (error) {
                console.log(error)
            } */

            /* let payload2 = payload
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
            console.log(callValidate) */
        }
        /*if (response.meta.authorization.mode === 'redirect') {

            var url = response.meta.authorization.redirect
            open(url)
        } */



    } catch (error) {
        return res.status( 400 ).json( error );
    }  
    
});

const port = process.env.PORT || 3100;

app.listen( port, function () {
    console.log( 'Express server listening on port ' + port )
} );
