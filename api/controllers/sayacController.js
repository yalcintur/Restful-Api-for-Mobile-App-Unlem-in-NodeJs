'use strict';


var mongoose = require('mongoose'),
  Sayac = mongoose.model('sayac');

exports.list_all_sayac = function(req, res) {
    Sayac.find({}, function(err, sayac) {
    if (err)
      res.send(err);
    res.json(sayac);
  });
};


exports.create_a_sayac = function(req, res) {
  var new_sayac= new Sayac(req.body);
  new_sayac.save(function(err, sayac) {
    if (err)
      res.send(err);
    res.json(sayac);
  });
};

exports.read_a_sayac = function(req, res) {
    Sayac.find({name: req.params.sayacId}, function (err, sayac) {

    if (err)
      res.send(err);
    res.json(sayac);
  });
};


exports.update_a_sayac = function(req, res) {
    Sayac.findOneAndUpdate({_id: req.params.sayacId}, req.body, {new: true}, function(err, sayac) {
    if (err)
      res.send(err);
    res.json(sayac);
    
  });
};


exports.delete_a_sayac = function(req, res) {
  Sayac.remove({
    _id: req.params.sayacId
  }, function(err, sayac) {
    if (err)
      res.send(err);
    res.json({ message: 'Sayac successfully deleted' });
  });
};
