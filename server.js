var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  
  Dergi = require('./api/models/dergiModel'), 
  Video = require('./api/models/videoModel'), 
  Carousel = require('./api/models/carouselModel'), 
  Konu = require('./api/models/konuModel'),
  Sayac = require('./api/models/sayacModel'),
  User = require('./api/models/userModel')
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kocunlemm'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes',);
              


routes(app); 

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  });
}); 
app.listen(port);


console.log('Dergi RESTful API server started on: ' + port);
