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
const createAndSaveExercise = async (exercise) => {

    try {
        console.log(exercise);
        var newExercise = await User.findOneAndUpdate(
            { _id: exercise.userId},
            { $push: { 
                log: exercise.log}},
            {new:true}
        );
        console.log("saved");
        console.log(newExercise);
        return newExercise;
    } catch (err) {
        throw new Error("Error saving new exercise");
    }
}

module.exports = {createAndSaveExercise};