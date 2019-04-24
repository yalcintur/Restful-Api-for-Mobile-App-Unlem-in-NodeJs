'use strict';
module.exports = function(app) {
  var dergiList = require('../controllers/dergiController');
  var videoList = require('../controllers/videoController');
  var carouselList = require('../controllers/carouselController');
  var konuList = require('../controllers/konuController');
  var sayacList = require('../controllers/sayacController');
  var userList = require('../controllers/userController');

  //Download
  app.route('/image/:imageId').get(dergiList.download_img);

  //Dergiler
  app.route('/dergiler')
    .get(dergiList.list_all_dergiler)
    .post(dergiList.create_a_dergi);

  app.route('/dergiler/:dergiId')
    .get(dergiList.read_a_dergi)
    .put(dergiList.update_a_dergi)
    .delete(dergiList.delete_a_dergi);

  app.route('/dergiler/:dergiId/:issueNo')
    .get(dergiList.read_a_dergi)
    .post(dergiList.add_a_link)
    .delete(dergiList.delete_a_link);

  // app.route('/dergiler/like/:dergiId/:issueNo')
   // .put(dergiList.add_a_innerlike)

  app.route('/dergiler/like/1/:dergiId')
    .put(dergiList.add_a_like);

  // app.route('/dergiler/innerlike/1/:dergiId/:issueId')
   // .put(dergiList.add_a_innerlike);

  app.route('/dergiler/like/-1/:dergiId')
    .put(dergiList.take_a_like);

  app.route('/dergiler/dislike/1/:dergiId')
    .put(dergiList.add_a_dislike); 

  app.route('/dergiler/dislike/-1/:dergiId')
    .put(dergiList.take_a_dislike); 
    //Videoalar
  app.route('/videolar')
    .get(videoList.list_all_videolar)
    .post(videoList.create_a_video);

  app.route('/videolar/:videoId')
    .get(videoList.read_a_video)
    .put(videoList.update_a_video)
    .delete(videoList.delete_a_video);

  app.route('/expired')
  .get(videoList.list_expired_videolar);

  app.route('/willexpire')
  .get(videoList.list_willexpire_videolar);

  app.route('/videolar/:videoId/:videoNo')
    .get(videoList.read_a_video);
     // Login - Register
    app.route('/register')
    .post(userList.register);

    app.route('/login')
    .get(userList.login);

    app.route('/delete')
    .delete(userList.delete_a_user)

    //Carousel
  app.route('/carousel')
    .get(carouselList.list_all_carousel)
    .post(carouselList.create_a_carousel);

  app.route('/carousel/:carouselId')
    .get(carouselList.read_a_carousel)
    .put(carouselList.update_a_carousel)
    .delete(carouselList.delete_a_carousel);

    app.route('/carousel/:carouselId/:carouselNo')
    .get(carouselList.read_a_carousel)

    //Konu ve Koseyazilari
  app.route('/konular')
  .get(konuList.list_all_konular)
  .post(konuList.create_a_konu);

  app.route('/konular/:konuId')
    .get(konuList.read_a_konu)
    .put(konuList.update_a_konu)
    .delete(konuList.delete_a_konu);

  app.route('/konular/:konuId/:koseyazisiNo')
    .get(konuList.read_a_konu)
    .post(konuList.add_a_koseyazisi)
    .delete(konuList.delete_a_koseyazisi);

  // Sayac

  app.route('/sayac')
  .get(sayacList.list_all_sayac)
  .post(sayacList.create_a_sayac)

  app.route('/sayac/:sayacId')
    .get(sayacList.read_a_sayac)
    .put(sayacList.update_a_sayac)
    .delete(sayacList.delete_a_sayac);





};

