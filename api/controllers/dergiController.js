'use strict';


var mongoose = require('mongoose'),
  Dergi = mongoose.model('dergiler');

  exports.download_img = function(req,res) {

    var file = __dirname + '../../../../trss/'+req.params.imageId;
     res.download(file); // Set disposition and send it.
   };

exports.list_all_dergiler = function(req, res) {
  Dergi.find({}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
  });
};


exports.create_a_dergi = function(req, res) {
  var new_dergi = new Dergi(req.body);
  new_dergi.save(function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
  });
};


exports.add_a_link = function(req, res) {

  var link = { link:".com"};
res.json(link)
   Dergi.findOneAndUpdate(
     { name: req.params.dergiId}, 
     { $push: {linkler: {no: req.body.no, link: req.body.link, info: req.body.info, like: req.body.like, dislike: req.body.dislike}} },
    function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
             // res.json(dergi);
          }
      });
};
/*
exports.add_a_innerlike = function(req, res) {
  var link = { link:".com"};
Person.update({'items.id': 2}, {'$set': {
  'items.$.name': 'updated item2',
  'items.$.value': 'two updated'
}}, function(err,success) { {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
             // res.json(dergi);
          }
      }
}) };
*/
exports.delete_a_link = function(req, res) {
  Dergi.findOneAndUpdate({ _id : req.params.dergiId }, { $pull : {linkler : { info : req.params.issueNo } } }, function(err, dergi) {
    if (err)
      res.send(err);
    res.json({ message: 'Link successfully deleted' });
  });
};

exports.read_a_dergi = function(req, res) {
  Dergi.find({name: req.params.dergiId}, function (err, dergi) {

    if (err)
      res.send(err);
    res.json(dergi);
  });
};


exports.update_a_dergi = function(req, res) {
  Dergi.findOneAndUpdate({_id: req.params.dergiId}, req.body, {new: true}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
    
  });
};

exports.add_a_like = function(req, res) {
  Dergi.findOneAndUpdate({_id: req.params.dergiId}, { $inc: { like: 1 } }, {new: true}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
  });
};

exports.add_a_dislike = function(req, res) {
  Dergi.findOneAndUpdate({_id: req.params.dergiId}, { $inc: { dislike: 1 } }, {new: true}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
    
  });
};

exports.take_a_like = function(req, res) {
  Dergi.findOneAndUpdate({_id: req.params.dergiId}, { $inc: { like: -1 } }, {new: true}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
  });
};

exports.take_a_dislike = function(req, res) {
  Dergi.findOneAndUpdate({_id: req.params.dergiId}, { $inc: { dislike: -1 } }, {new: true}, function(err, dergi) {
    if (err)
      res.send(err);
    res.json(dergi);
    
  });
};

exports.delete_a_dergi = function(req, res) {
  Dergi.remove({
    _id: req.params.dergiId
  }, function(err, dergi) {
    if (err)
      res.send(err);
    res.json({ message: 'Dergi successfully deleted' });
  });
};
