'use strict';


var mongoose = require('mongoose'),
  Carousel = mongoose.model('carousel');

exports.list_all_carousel = function(req, res) {
    Carousel.find({}, function(err, carousel) {
    if (err)
      res.send(err);
    res.json(carousel);
  });
};


exports.create_a_carousel = function(req, res) {
  var new_carousel = new Carousel(req.body);
  new_carousel.save(function(err, carousel) {
    if (err)
      res.send(err);
    res.json(carousel);
  });
};

exports.read_a_carousel = function(req, res) {
    Carousel.find({name: req.params.carouselId}, function (err, carousel) {

    if (err)
      res.send(err);
    res.json(carousel);
  });
};


exports.update_a_carousel = function(req, res) {
    Carousel.findOneAndUpdate({_id: req.params.carouselId}, req.body, {new: true}, function(err, carousel) {
    if (err)
      res.send(err);
    res.json(carousel);
    
  });
};


exports.delete_a_carousel = function(req, res) {
  Carousel.remove({
    _id: req.params.carouselId
  }, function(err, carousel) {
    if (err)
      res.send(err);
    res.json({ message: 'Carousel successfully deleted' });
  });
};
