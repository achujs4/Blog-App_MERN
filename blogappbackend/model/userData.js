const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : String,
    userEmail : String,
    userPassword: String,
    userPhoneNumber : Number,
    userAddress : String
})

const userData = mongoose.model('user',userSchema);

module.exports  = userData;