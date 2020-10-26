// Create model
var User = require('../models/user');

/**
 * Get all users in the database and return without log attribute
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const getAllUsers = async () => {

    try {
        const users = await User.find({}).select({log: 0});
        return users
    } catch(err) {
        throw new Error("Error retrieving all user records");
    }
}

module.exports = {getAllUsers};