const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const indexRouter = require('./routes/index');


const app = express();

// Enable CORS for all routes
const corsOptions = {
  origin: '*', // or specify your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable cookies, if needed
};

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* passport */
app.use(passport.initialize());
require('./security/passport')(passport);

/* connect to db */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));


app.use('/api', indexRouter);

module.exports = app;
