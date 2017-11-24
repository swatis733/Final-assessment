// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors= require('cors');
var expressJWT = require('express-jwt');
var jwt=require('jsonwebtoken');


// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/netflixdb');

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


routes = require('./routes/routes');

app.use(expressJWT({ secret: 'token' })    
.unless({ path: [new RegExp('/api/v1/getUser.*/', 'i'), '/api/v1/newUser'] }));


app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 8888;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);
