var mongoose = require('mongoose');

var SeriesSchema = new mongoose.Schema({   
    series_name:{type: String},
    series_id: {type:Number},
    category: {type: String},
    category_id: {type: Number}
});
                                                          
module.exports = mongoose.model('Series', SeriesSchema); 