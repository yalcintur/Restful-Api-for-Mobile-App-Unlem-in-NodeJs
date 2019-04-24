'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var carouselSchema = new Schema({
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('carousel', carouselSchema);