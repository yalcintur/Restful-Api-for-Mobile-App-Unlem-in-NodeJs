'use strict';

var mongoose = require('mongoose'),
Video = mongoose.model('videolar');

 // var videoAlgorithm = require('../algorithms/videoAlgorithm');

exports.list_all_videolar = function(req, res) {
  Video.find({}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

exports.list_expired_videolar = function(req, res) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kocunlemm");
    var mysort = { expireDate: 1 };
   // var start = new Date.now();
   var expiredList = [];
    //console.log(start)
    dbo.collection("videolars").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      result.forEach(element => {

        var a = new Date(element.expireDate);
        var b = new Date(Date.now());
     
        var msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
        var msDateB = Date.UTC(b.getFullYear(), b.getMonth()+1, b.getDate());
    
        //console.log(start);
        if(parseFloat(msDateA) < parseFloat(msDateB)) {
          console.log(element);

          expiredList.push(element);
          return;
        } 
      });
      res.status(200).send(expiredList);
     // res.send(result);
     // console.log(result);
      db.close();
    });
  });
};

exports.list_willexpire_videolar = function(req, res) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kocunlemm");
    var mysort = { expireDate: 1 };
   // var start = new Date.now();
    var willExpireList = [];
    //console.log(start)
    dbo.collection("videolars").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      result.forEach(element => {

        var a = new Date(element.expireDate);
        var b = new Date(Date.now());
     
        var msDateA = Date.UTC(a.getFullYear(), a.getMonth()+1, a.getDate());
        var msDateB = Date.UTC(b.getFullYear(), b.getMonth()+1, b.getDate());
    
        //console.log(start);
        if(parseFloat(msDateA) > parseFloat(msDateB)) {
          console.log(element);
          willExpireList.push(element)
          return;
        } 

      });
      res.status(200).send(willExpireList[0]);

     // res.send(result);
     // console.log(result);
      db.close();
    });
  });
};

exports.create_a_video= function(req, res) {
  var new_video = new Video(req.body);
  new_video.save(function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
  });
};

exports.read_a_video = function(req, res) {
  Video.find({name: req.params.videoId}, function (err, video) {

    if (err)
      res.send(err);
    res.json(video);
  });
};


exports.update_a_video = function(req, res) {
  Video.findOneAndUpdate({_id: req.params.videoId}, req.body, {new: true}, function(err, video) {
    if (err)
      res.send(err);
    res.json(video);
    
  });
};


exports.delete_a_video = function(req, res) {
  Dergi.remove({
    _id: req.params.videoId
  }, function(err, video) {
    if (err)
      res.send(err);
    res.json({ message: 'Video silindi' });
  });
};
