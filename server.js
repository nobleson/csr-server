const express     = require('express')
const bodyParser = require('body-parser');
require('./db/mongoose');
const errorHandler = require('./_helper/error-handler');
const app         = express();
app.use(bodyParser.urlencoded({ extended: true,limit: '100mb' })); 
app.use(bodyParser.json({ limit: '100mb' }));
app.use(errorHandler);

const port = 4000;

app.use('/user', require('./route/user')); 
app.use('/auth', require('./route/user.authentication'));

app.listen(port,() =>{
    console.log('server is up on ' + port);
})
