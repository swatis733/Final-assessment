var mongoose = require('mongoose');

var SeasonSchema = new mongoose.Schema({   
    season_name:{type: String},
    category_id: {type: Number},
    season_id:{type:Number},
    season_image: {type:String}
});
                                                          
module.exports = mongoose.model('Season', SeasonSchema); 