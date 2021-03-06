const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const APP_PORT = 4000;
const app = express();
const timeStamp = require('./routes/timestamp');
const whoAmI = require('./routes/whoami');
const tinyUrl = require('./routes/tinyurl');

app.use(morgan('combined'));
app.use(cors());

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


app.get('/sayHello', function(req, res){
  res.send('Hello from the back-end.');
});

app.use('/api/timestamp', timeStamp);
app.use('/api/whoami', whoAmI);
app.use('/api/shorturl', tinyUrl);

app.listen(APP_PORT);
console.log('Webserver listening to port', APP_PORT);
