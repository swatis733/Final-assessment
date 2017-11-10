var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/controller');

router.route('/v1/newUser')
    .post(usercontroller.newUser);

router.route('/v1/getUser/:email')
    .get(usercontroller.getUser); 

router.route('/v1/newSeries') 
     .post(usercontroller.newSeries);

router.route('/v1/getSeries/:category_id') 
     .get(usercontroller.getSeries);

router.route('/v1/newSeason') 
     .post(usercontroller.newSeason);

router.route('/v1/getSeason/:season_id') 
      .get(usercontroller.getSeason);

router.route('/v1/newEpisode') 
     .post(usercontroller.newEpisode);

router.route('/v1/getEpisode/:epiid') 
      .get(usercontroller.getEpisode);

router.route('/v1/newMovie') 
     .post(usercontroller.newMovie);

router.route('/v1/getMovie/:moviename') 
      .get(usercontroller.getMovie);

module.exports = router;