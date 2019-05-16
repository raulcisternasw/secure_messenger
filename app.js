'use strict'

const express     = require('express');
const usersRouter = require('./routes/user');
const app         = express();

app.use('/users', usersRouter);

module.exports = app;
