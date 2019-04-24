'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var konuSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  route: {
    type: String
  },
  info:{
    type: String
     },
   img:{
    type: String,
    required: true
   },
  koseyazilari: [{
   okunma : Number,
   link : String,
   info : Number,
   author: String,
   title: {
    type: String,
    required: true
   },
   icerik: {
    type: String,
    required: true
   },
   dislike: Number,
   like: Number,
   Created_date: {
    type: Date,
    default: Date.now
  }
  }],
  Created_date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('konular', konuSchema);