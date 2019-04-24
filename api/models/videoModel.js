'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    link: {
        type: String,
        required: true
      },
    imglink: {
        type: String,
        required: true
      },
    info: {
        type: String,
        required: true
      },
    expireDate:{
      type: String,
      required: true
     },
    konukname: {
        type: String,
        required: true
      },
    konukimg: {
        type: String,
        required: true
      },
    Created_date: {
      type: Date,
      default: Date.now
    }
  });
module.exports = mongoose.model('videolar', videoSchema);