'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('user');
    var generatePassword = require('password-generator');
    var nodemailer = require('nodemailer');

exports.register = function(req, res) {

    var email = req.body.email;
    var password = generatePassword(6,false);
    var new_user= new User();

    new_user.email = email;
    new_user.password = password; 
  
    new_user.save(function(err, user) {
     if (err)
      res.send(err);
     res.json(user);
       });

       var transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: 'unlemkoc2022@gmail.com',
          pass: 'unlemSabanci'
        }
      });
    
      var mailOptions = { 
        from: 'unlemkoc2022@gmail.com',
        to: email,
        subject: 'Ünleme Hoşgeldiniz',
          html: '<h1>Ünleme Hoşgeldiniz</h1>'+'<p> Hesabınız Başarıyla yaratılmıştır işte şifreniz: </p>'+'<p>'+password+'</p>'
      };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

exports.login = function(req,res) {

    var password = req.body.password;

    var email = req.body.email;

    User.findOne({password : password ,email : email}, function (err, user) {

        if (err)
         return res.json(404);

        if(!user){
         return res.json(500);
        }
         
        res.json(200);
        
      });
};


exports.delete_a_user = function(req, res) {
    User.remove({
      email: req.body.email
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User silindi' });
    });
  };

