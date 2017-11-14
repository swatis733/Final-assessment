var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({   
    movie_name :{type: String},
    movie_image: {type:String},
    movie_category:{type: String}
});
                                                          
module.exports = mongoose.model('Movie', MovieSchema); 