const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//dot env
const dotenv = require('dotenv');
dotenv.config();

// enabling CORS for all requests
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
// using bodyParser to parse JSON bodies into JS objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3100/a.
*/
const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

// create upload folder
const folderName = `${dir}/uploads`;

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {}

/*  */
//router routes
const productRouter = require('./server/router/ProductRouter');
const categoryRouter = require('./server/router/CategoryRouter');
const userRouter = require('./server/router/UserRouter');
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', userRouter);

const port = process.env.PORT || 3100;

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
