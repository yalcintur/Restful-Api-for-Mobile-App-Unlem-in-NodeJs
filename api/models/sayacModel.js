'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sayacSchema = new Schema({
  endDate: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  expTitle: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('sayac', sayacSchema);