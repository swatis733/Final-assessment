var mongoose = require('mongoose');

var EpisodeSchema = new mongoose.Schema({   
    episode_no:{type: Number},
    season_id:{type:Number},
    series_id :{type:Number},
    episode_image:{type:String} 
});
                                                          
module.exports = mongoose.model('Episode', EpisodeSchema); 