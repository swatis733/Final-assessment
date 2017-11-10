var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    email: { type : String, required: true , unique: true},
    name: {type: String},
    password: { type: String, required: true },
    role: {type: Number}
});

var user =mongoose.model('User',userSchema);
module.exports = user

