// Create model
var Exercise = require('../models/exercise')

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
const createAndSaveExercise = async (exercise) => {

    try {
        const newExercise = await Exercise.findOneAndUpdate(
            { userId: exercise.userId},
            { $push: { 
                log: exercise.log}},
            {new:true}
        );
        console.log("saved");
        return newExercise;
    } catch (err) {
        throw new Error("Error saving new exercise");
    }
}

module.exports = {createAndSaveExercise};