var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({   
    movie_name :{type: String},
    movie_id: {type:Number}
});
                                                          
module.exports = mongoose.model('Movie', MovieSchema); 