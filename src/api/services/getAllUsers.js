// Create model
var User = require('../models/user');

/**
 * Find a user in the database
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const getAllUsers = async () => {

    try {
        const users = await User.find({});
        return users
    } catch(err) {
        throw new Error("Error retrieving all user records");
    }
}

module.exports = {getAllUsers};