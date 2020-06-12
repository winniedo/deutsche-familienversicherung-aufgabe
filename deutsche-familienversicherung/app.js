var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var helmet = require('helmet');
var morgan = require('morgan');
var apiRouter = require('./route');

var app = express();


// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/deutsche-familienversicherung')));
app.use('/', express.static(path.join(__dirname, 'dist/deutsche-familienversicherung')));
app.use('/post', apiRouter);

module.exports = app;
