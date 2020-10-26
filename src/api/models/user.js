require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    log: [{
        _id: false,
        description: {type:String, required: true},
        duration: {type:Number, required: true},
        date: {type: Date, required: false}
    , required:false}]
})

module.exports = mongoose.model('User', userSchema);