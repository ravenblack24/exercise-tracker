// Create model
var User = require('../models/user');

/**
 * Find a user in the database
 * 
 * @param {String}   username the string representing a username to lookup
 * @param {Response} res      the response to the request
 * 
 * @returns {String|Object} 
 * 
 * @throws {Error}
 */
const findByUsername = (username, res) => {

    User.findOne({"username": username}, (err, data) => {
        if(err) {
            throw new Error(err);
        } 
        if(data) {
            return res.json({"error": "username exists, try again"}) 
        }
        return data
    })
}

module.exports = {findByUsername};