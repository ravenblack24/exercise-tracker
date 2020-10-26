// Create model
var User = require('../models/user')

/**
 * Save user to the database
 * 
 * @param {String}   exercise     the user exercise to save
 * @param {Response} res          the response to the request
 * 
 * @returns {Promise<String|Object>} 
 * 
 * @throws {Error}
 */
const createAndSaveExercise = async (exercise) => {

    try {
        var newExercise = await User.findOneAndUpdate(
            { _id: exercise.userId},
            { $push: { 
                log: exercise.log}},
            {new:true}
        );
        return newExercise;
    } catch (err) {
        throw new Error("Error saving new exercise");
    }
}

module.exports = {createAndSaveExercise};