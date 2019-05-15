'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  emailAddress:{
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
