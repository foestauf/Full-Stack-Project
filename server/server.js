const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const APP_PORT = 4000;
const app = express();
const apiRouter = require('./routes/api')

app.use(morgan('combined'));
app.use(cors());

app.get('/sayHello', function(req, res){
  res.send('Hello from the back-end.');
});

app.use('/api/timestamp', apiRouter)

app.listen(APP_PORT);
console.log('Webserver listening to port', APP_PORT);
