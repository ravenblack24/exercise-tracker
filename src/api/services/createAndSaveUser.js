// Create model
var User = require('../models/user')

/**
 * Save user to the database
 * 
 * @param {String}   username     the username to save
 * @param {Response} res          the response to the request
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const createAndSaveUser = async (username) => {

    try {
        const newUser = User(username);
        const saved = await newUser.save();
        return saved;
    } catch (err) {
        throw new Error("Error saving new user");
    }
}

module.exports = {createAndSaveUser};