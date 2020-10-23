// Create model
var User = require('../models/user');

/**
 * Find a user in the database
 * 
 * @param {String}   id       the string representing a user id
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const findById = async (id) => {

    try {
        const result = await User.findById(id);
        return result
    } catch(err) {
        throw new Error("Error finding matching record");
    }
}

module.exports = {findById};