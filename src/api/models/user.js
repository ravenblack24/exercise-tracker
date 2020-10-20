require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    username: {type:String, required: true}
})

module.exports = mongoose.model('User', userSchema);