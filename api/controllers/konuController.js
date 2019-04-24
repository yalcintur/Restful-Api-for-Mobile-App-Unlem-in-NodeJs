'use strict';


var mongoose = require('mongoose'),
  Konu= mongoose.model('konular');
   
exports.list_all_konular = function(req, res) {
  Konu.find({}, function(err, konu) {
    if (err)
      res.send(err);
    res.json(konu);
  });
};


exports.create_a_konu = function(req, res) {
  var new_konu = new Konu(req.body);
  new_konu.save(function(err, konu) {
    if (err)
      res.send(err);
    res.json(konu);
  });
};


exports.add_a_koseyazisi = function(req, res) {
  var link = { link:".com"};
res.json(link)
   Konu.findOneAndUpdate(
     { name: req.params.konuId}, 
     { $push: {koseyazilari: {okunma: req.body.okunma, link: req.body.link, info: req.body.info, title: req.body.title, icerik: req.body.icerik,dislike: req.body.dislike,like:req.body.like}} },
    function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
          }
      });
};

exports.delete_a_koseyazisi = function(req, res) {
  Konu.findOneAndUpdate({ _id : req.params.konuId }, { $pull : {koseyazilari : { info : req.params.koseyazisiNo } } }, function(err, konu) {
    if (err)
      res.send(err);
    res.json({ message: 'Koseyazisi successfully deleted' });
  });
};


exports.read_a_konu = function(req, res) {
  Konu.find({name: req.params.konuId}, function (err, konu) {
    if (err)
      res.send(err);
    res.json(konu);
  });
};


exports.update_a_konu = function(req, res) {
  Konu.findOneAndUpdate({name: req.params.konuId}, req.body, {new: true}, function(err, konu) {
    if (err)
      res.send(err);
    res.json(konu);
    
  });
};


exports.delete_a_konu = function(req, res) {
  Konu.remove({
    _id: req.params.konuId
  }, function(err, konu) {
    if (err)
      res.send(err);
    res.json({ message: 'Konu successfully deleted' });
  });
};
