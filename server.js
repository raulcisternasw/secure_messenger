'use strict'

require('dotenv').config();
const express      = require('express');
const app          = express();
const mongoose     = require('mongoose');
const port         = process.env.PORT || 3000;
const dbPort       = process.env.DB_PORT || 27017;
const dbUrl        = process.env.DB_URL || "localhost";
const dbCollection = process.env.DB_COLLECTION || "secure_messenger";

mongoose.set('useCreateIndex', true);

mongoose.connect(`mongodb://${ dbUrl }:${ dbPort }/${ dbCollection }`, { useNewUrlParser: true })
  .then(_ => console.log('Connected Successfully to MongoDB'))
  .catch(err => console.log(err));

app.listen(port, err => {
  if(err) console.error(err);
  console.log(`Listening for Requests on port: ${ port }`);
});
