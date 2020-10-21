// Create model
var User = require('../models/user');

/**
 * Find a user in the database
 * 
 * @param {String}   username the string representing a username to lookup
 * @param {Response} res      the response to the request
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const findByUsername = async (username) => {

    try {
        const result = await User.findOne(username);
        console.log(result);
        return result
    } catch(err) {
        throw new Error("Error finding matching record");
    }
}

module.exports = {findByUsername};