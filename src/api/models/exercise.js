require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const exerciseSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    log: [{
        description: {type:String, required: true},
        duration: {type:Number, required: true},
        date: {type: Date, required: false}
    }]
})

module.exports = mongoose.model('Exercise', exerciseSchema);