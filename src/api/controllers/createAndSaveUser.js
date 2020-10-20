// Create model
var User = require('../models/user')

/**
 * Save a URL to the database
 * 
 * @param {String}   original_url the original url to save
 * @param {Response} res          the response to the request
 * 
 * @returns {String} 
 * 
 * @throws {Error}
 */
const createAndSaveUser = (usrname, res) => {

    const newUser = User(usrname);
    
    newUser.save((err, data) => {
        if(err) throw new Error(err);
        res.json({"username": data.username, "userId": data._id});
    });
}

module.exports = {createAndSaveUser};