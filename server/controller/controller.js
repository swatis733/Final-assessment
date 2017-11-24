var User = require('../models/user');
var Series = require('../models/series');
var Season = require('../models/season');
var Episode = require('../models/episode');
var Movie = require('../models/newmovie');
let jwt    = require('jsonwebtoken');
bcrypt=require('bcrypt');
var multer = require('multer');

exports.newUser = (req, res) => {
    var password=req.body.password;
    bcrypt.hash(password, 5,function(err, hash) {
        console.log(hash);
        var user = new User({     
            email: req.body.email,
            name: req.body.name,
            password: hash,
            role: 1
        });
        
        user.save((error, response) => {
            if (error) {
                 res.json(error);
            }
            else {
                res.json({
                    success: true,
                    body: response
                });
            }
        });
      });
}



exports.uploadImage = (req, res) => {    
    var path;    
    var storage = multer.diskStorage({        
        destination: function (req, res, next) {            
            next(null, '/home/user/Newapp/src/assets/images');        
        },        
        filename: function (req, file, next) {            
            path = 'assets/images/' + file.originalname + '-' + Date.now() + '.jpg';            
            next(null, file.originalname + '-' + Date.now() + '.jpg');        
        }    });    
        var upload = multer({ storage: storage }).any('imageField');     
        upload(req, res, error=> {        
            if(error) {            
                return res.json(error);        
            }        
            res.json({            
                message: 'Uploaded',            
                path:path       
             })    
            })     
        }


exports.getUser = (req,res) => {
    var email = req.params.email;
    var password= req.params.password;
    User.findOne({email: email}).exec().then(user=>{
        if(user!== null){
            cryptedpassword=user.password;
            bcrypt.compare(password, cryptedpassword, function(err, response) {
                if(response) {
                    var mytoken = jwt.sign({ 
                        email: email,
                        role: user.role            
                    }, 'token');
                      res.json({
                        success: true,
                        token: mytoken
                    });
                } else {
                        res.json({
                            success: false,
                            body: "password does not match"
                        });
                } 
              });
        }
        else
        res.json(
            {
                success: false,
                body: "User doesnot exists"
            }
        );
       
    });
} 

exports.newSeries = (req, res) => {
    var series= new Series({
    series_name:req.body.series_name,
    series_id: req.body.series_id,
    category: req.body.category,
    category_id: req.body.category_id,
    series_image: req.body.series_image  
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
    Series.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

// exports.getSeries = (req,res) => {
//     var category_id= req.params.category_id;
//     series.findOne({category_id: category_id}, (error, response) => {
//         if (error) {
//             return res.json(req, res, error);
//         }
//         res.json(response);
//     });
// }

exports.newSeason = (req, res) => {
    var season= new Season({
        season_name:req.body.season_name,
        series_id: req.body.series_id,
        category_id: req.body.category_id,
        season_id:req.body.season_id,
        season_image:req.body.season_image       
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
    var series_id= req.params.series_id;
    Season.find({series_id: series_id}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newEpisode = (req, res) => {
    var episode= new Episode({
        episode_no:req.body.episode_no,
        season_id:req.body.season_id,
        series_id :req.body.series_id,
        episode_image:req.body.episode_image 
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
    var seriesid= req.params.series_id;
    var seasonid= req.params.season_id;
    console.log(seasonid);
    Episode.find({series_id: seriesid,season_id: seasonid}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.newMovie = (req, res) => {
    var movie= new Movie({
        movie_name :req.body.movie_name,
        movie_image: req.body.movie_image,
        movie_category:req.body.movie_category,   
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
    Movie.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.deleteMovie = function(req,res){
    var name = req.params.movie_name;
    Movie.findOne({movie_name: name}, function(error,emp) {
        if(error){
          res.json(error);
        }
        Movie.remove({movie_name: name},function(err,qres){
            if(err){
              res.json(err);
            }
            res.json("Successfully Deleted");
        });
    });
  }
  
exports.updateMovie = function (req, res) {
    var name = req.params.movie_name;
    Movie.findOneAndUpdate({movie_name: name},req.body,{new: true}, function (err, Movie) {
        console.log("ara kya");
        if (err) {
            res.send(err);
        }
        res.json(Movie);
    })
}