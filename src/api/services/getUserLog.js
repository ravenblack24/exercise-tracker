// Create model
var User = require('../models/user');

/**
 * Get all users in the database and return without log attribute
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const getUserLog = async (userId) => {

    try {
        const user = await User.findOne(userId);
        return user
    } catch(err) {
        throw new Error("Error retrieving user record");
    }
}

module.exports = {getUserLog};