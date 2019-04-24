'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var dergiSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dergiId: {
    type: Number
  },
  info:{
    type: String,
    required: true
   },
   img:{
    type: String,
    required: true
   },
  linkler: [{
   no : {
    type: String,
    required: true
   },
   link :{
    type: String,
    required: true
   },
   info : {
    type: String,
    required: true
   },
   like : {
    type: Number,
    required: true
   },
   dislike: {
    type: Number,
    required: true
   }
  }],
  like: {
    type: Number
  },
  dislike: {
    type: Number
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('dergiler', dergiSchema);