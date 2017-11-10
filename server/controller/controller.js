var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Episode = require('../models/episode');
var Movie = require('../models/newmovie');
 
exports.newUser = (req, res) => {
    var user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: 1
        
    });
    user.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json(
                "Added Successfully"
            );
        }
    });
} 

exports.getUser = (req,res) => {
    var email = req.params.email;
    user.findOne({email: email}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newSeries = (req, res) => {
    var series= new Series({
    series_name:req.body.series_name,
    series_id: req.body.series_id,
    category: req.body.category,
    category_id: req.body.category_id
        
    });
    series.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json(
                "Added Successfully"
            );
        }
    });
} 

exports.getSeries = (req,res) => {
    var category_id= req.params.category_id;
    series.findOne({category_id: category_id}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newSeason = (req, res) => {
    var season= new Season({
        season_name:req.body.season_name,
        category_id: req.body.category_id,
        season_id:req.body.season_id
        
    });
    season.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json(
                "Added Successfully"
            );
        }
    });
} 

exports.getSeason = (req,res) => {
    var season_id= req.params.season_id;
    season.findOne({season_id: season_id}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newEpisode = (req, res) => {
    var episode= new Episode({
        episode_no:req.body.episode_no,
        season_id:req.body.season_id
        
    });
    episode.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json(
                "Added Successfully"
            );
        }
    });
} 

exports.getEpisode = (req,res) => {
    var epiid= req.params.episode_id;
    episode.findOne({episode_id: epi_id}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newMovie = (req, res) => {
    var movie= new Movie({
        movie_name :req.body.movie_name,
        movie_id: req.body.movie_id
        
    });
    movie.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json(
                "Added Successfully"
            );
        }
    });
} 

exports.getMovie = (req,res) => {
    var moviename= req.params.movie_name;
    movie.findOne({movie_name: moviename}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}




  




