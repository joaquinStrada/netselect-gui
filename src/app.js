const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// middelwares
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));

// importing routes

// middelwares routes

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(port, () => {
    console.log('Server on port', port);
});